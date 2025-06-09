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

