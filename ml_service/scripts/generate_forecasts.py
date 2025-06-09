import pymongo
import pandas as pd
import pickle
from datetime import datetime, timedelta
from darts.models import NBEATSModel
from darts import TimeSeries
from darts.dataprocessing.transformers import Scaler, MissingValuesFiller
import numpy as np

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

