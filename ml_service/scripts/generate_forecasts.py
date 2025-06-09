import pymongo
import pandas as pd
import pickle
from datetime import datetime, timedelta
from darts.models import NBEATSModel
from darts import TimeSeries
from darts.dataprocessing.transformers import Scaler, MissingValuesFiller
import numpy as np
import pytz

print(f"[{datetime.now()}] Starting generate_forecasts.py script...")

try:
    model = NBEATSModel.load("ml_service/models/nbeats_total_generation_model_mean_filler.pt")
    
    with open("ml_service/models/scalers/target_scaler.pkl", "rb") as f:
        target_scaler = pickle.load(f)
    with open("ml_service/models/scalers/covariates_scaler.pkl", "rb") as f:
        covariates_scaler = pickle.load(f)
    print("Model and scalers loaded successfully!")
except FileNotFoundError as e:
    print(f"ERROR: Failed to load model or scalers. Check paths: {e}")
    exit(1)
except Exception as e:
    print(f"ERROR: An unexpected error occurred while loading model/scalers: {e}")
    exit(1)

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["brasilgenerationdb"]
historical_data_collection = db["sin"]
forecast_collection = db["forecasting"]


INPUT_CHUNK_LENGTH = model.input_chunk_length
OUTPUT_CHUNK_LENGTH = model.output_chunk_length
FORECAST_FREQ = "min"

def fetch_historical_data(collection, look_back_minutes):

    earliest_time_needed = datetime.now() - timedelta(minutes=look_back_minutes)

    docs = list(collection.find({"instante": {"$gte": earliest_time_needed}}).sort("instante", pymongo.ASCENDING))

    if not docs:
        print("No historical data found in sin collection for forecasting")
        return pd.DataFrame()
    
    
    records =[]
    for doc in docs:
        records.append({
            "instante": doc.get("instante"),
            "geracao": doc.get("geracao"),
            "source": doc.get("source")
        })

    df = pd.DataFrame(records)
    df["instante"] = pd.to_datetime(df["instante"], utc=True)
    df = df.sort_values("instante")

    return df

def prepare_time_series(df_raw, expected_source_cols):
    if df_raw.empty:
        return None, None

    df_for_ml = df_raw.pivot(index='instante', columns='source', values='geracao')
    df_for_ml = df_for_ml.sort_index()
    df_for_ml.column.name = None

    df_for_ml["total"] = df_for_ml[expected_source_cols].sum(axis=1)

    value_cols_for_ts = expected_source_cols + ["total"]

    #setting the type float32 is essencial for NBEATS model
    df_for_ml[value_cols_for_ts] = df_for_ml[value_cols_for_ts].astype('float32')

    target_ts = TimeSeries.from_dataframe(
        df_for_ml,
        time_col='instante',
        value_cols=["total"],
        freq=FORECAST_FREQ,
        fill_missing_dates=True,
        fillna_value=None 
    )
    past_covariates_ts = TimeSeries.from_dataframe(
        df_for_ml,
        time_col='instante',
        value_cols=expected_source_cols,
        freq=FORECAST_FREQ,
        fill_missing_dates=True,
        fillna_value=None
    )

    mean_filler = MissingValuesFiller(fill="auto")

    target_ts_filled = mean_filler.transform(target_ts)
    past_covariates_ts_filled = mean_filler.transform(past_covariates_ts)

    return target_ts_filled, past_covariates_ts_filled

if  __name__ == "__main__":
    expected_source_cols = ["eolica", "hidraulica", "nuclear", "solar", "termica"]

    df_historical = fetch_historical_data(historical_data_collection, INPUT_CHUNK_LENGTH)

    if df_historical.empty:
        print("Exiting: No raw historical data to start processing for forecasting.")
        exit(0)
    
    #Do not know if I need this check. Expensive operation to pivot data, or should wait to check after timeseries formed?
    temp_pivoted_df = df_historical.pivot(index='instante', columns='source', values='geracao')

    if len(temp_pivoted_df) < INPUT_CHUNK_LENGTH:
        print(f"Exiting: Pivoted historical data has insufficient unique timestamps ({len(temp_pivoted_df)} points) for prediction (needs at least {INPUT_CHUNK_LENGTH} unique timestamps).")
        exit(0)

    target_series_input, past_covariates_input = prepare_time_series(df_historical, expected_source_cols)

    target_series_for_prediction = target_series_input.last_n(INPUT_CHUNK_LENGTH)
    past_covariates_for_prediction = past_covariates_input.last_n(INPUT_CHUNK_LENGTH)

    target_series_scaled = target_scaler.transform(target_series_for_prediction)
    past_covariates_scaled = covariates_scaler.transform(past_covariates_for_prediction)

    print(f"[{datetime.now()}] Generating {OUTPUT_CHUNK_LENGTH}-minute forecast...")

    try:
        predictions_scaled = model.predict(n=OUTPUT_CHUNK_LENGTH, 
                                           series=target_series_scaled, 
                                           past_covariates=past_covariates_scaled
                                           )
        predictions = target_scaler.inverse_transform(predictions_scaled)
        print(f"[{datetime.now()}] Forecast generated successfully.")

    except Exception as e:
        print(f"ERROR: Prediction failed during scheduled run: {e}. Ensure the model received valid input.")
        exit(1)
        
    forecast_docs = []
    current_prediction_time = datetime.now(pytz.utc)

    for i in range(len(predictions)):
        forecast_doc = {
            "instante": predictions.time_index[i].to_pydatetime(),
            "predicted_total_geracao": float(predictions.values()[i][0]),
            "prediction_time": current_prediction_time 
        }
        forecast_docs.append(forecast_doc)

    if forecast_docs:
        forecast_collection.insert_many(forecast_docs)
        print(f"[{datetime.now()}] Successfully saved {len(forecast_docs)} forecasts to MongoDB.")
    else:
        print(f"[{datetime.now()}] No forecasts generated to save.")

    print(f"[{datetime.now()}] Finished generate_forecasts.py script.")


    
