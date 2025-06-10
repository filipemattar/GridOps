from typing import Dict, List, Union
from fastapi import FastAPI, HTTPException
import pymongo
from datetime import datetime, timedelta
import pytz

app = FastAPI(
    title="Generation Forecasting API",
    description="API for predicting total generation using an NBEATS model.",
    version="1.0.0"
    )

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["brasilgenerationdb"]
forecast_collection = db["forecasting"]

#root endpoint, just for checking
@app.get("/")
def read_root():
    return{"message": "API is working!"}


@app.get("/forecast", response_model=List[Dict[str, Union[str, float]]])
def get_forecast():

    query = {}

    latest_run_doc = forecast_collection.find_one(sort=[("prediction_time", pymongo.DESCENDING)])

    if not latest_run_doc:
        raise HTTPException(status_code=404, detail="No forecasts found in the database. Please ensure forecast generation is running.")

    latest_prediction_time = latest_run_doc["prediction_time"]

    query["prediction_time"] = latest_prediction_time 

    last_forecast_instante_doc = forecast_collection.find(
        {"prediction_time": latest_prediction_time},
        {"instante": 1} # Projeta apenas o campo 'instante'
    ).sort("instante", pymongo.DESCENDING).limit(1).next()

    if not last_forecast_instante_doc:
        raise HTTPException(status_code=404, detail="No forecast data points found for the latest prediction run.")

    last_forecast_instante_utc = last_forecast_instante_doc["instante"]

    target_date_utc = last_forecast_instante_utc.date()

    #setting the start and end of the query
    start_of_day_utc = datetime(target_date_utc.year, target_date_utc.month, target_date_utc.day, 0, 0, 0, tzinfo=pytz.utc)
    end_of_day_utc = start_of_day_utc + timedelta(days=1) - timedelta(microseconds=1)

    query["instante"] = {"$gte": start_of_day_utc, "$lte": end_of_day_utc}

    forecast_cursor = forecast_collection.find(query).sort("instante", pymongo.ASCENDING)

    response_data = []

    for doc in forecast_cursor:
        response_data.append({
            "instante": doc["instante"].isoformat(),
            "predicted_total_geracao": float(doc["predicted_total_geracao"])
        })

    if not response_data:
        raise HTTPException(status_code=404, detail=f"No forecasts found for {target_date_utc.isoformat()} within the latest prediction run.")
    
    return response_data