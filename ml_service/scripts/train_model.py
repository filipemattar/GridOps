import pymongo
import pandas as pd
import pickle
from datetime import datetime
from darts.models import NBEATSModel
from darts import TimeSeries
from darts.dataprocessing.transformers import Scaler, MissingValuesFiller



client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["brasilgenerationdb"]

collection = db["sin"]

docs = list(collection.find({})) 


records = []
for doc in docs:
    records.append({
        "instante": doc.get("instante"),
        "geracao": doc.get("geracao"),
        "source": doc.get("source")
    })

df = pd.DataFrame(records)

df["instante"] = pd.to_datetime(df["instante"])
df = df.sort_values("instante")

#pivoting the data frame
df_for_ml = df.pivot(index='instante', columns='source', values='geracao')

df_for_ml = df_for_ml.sort_index()
df_for_ml.columns.name = None

#creating total column
df_for_ml["total"] = df_for_ml["eolica"] + df_for_ml["hidraulica"]  + df_for_ml["nuclear"]  + df_for_ml["solar"] + df_for_ml["termica"]  


#setting the dtype as float32
df_for_ml[["eolica", "hidraulica", "nuclear", "solar", "termica", "total"]] = df_for_ml[["eolica", "hidraulica", "nuclear", "solar", "termica", "total"]].astype('float32')

#Interpolating any missing generation record
# df_interpolate = df_for_ml.interpolate(method="nearest", axis=0)


target_series = TimeSeries.from_dataframe(df_for_ml, fill_missing_dates=True, 
                                   freq="min" , 
                                   fillna_value=None, 
                                   value_cols=["total"]
                                   )

past_covariates = TimeSeries.from_dataframe(df_for_ml, fill_missing_dates=True, 
                                   freq="min" , 
                                   fillna_value=None, 
                                   value_cols=["eolica", "hidraulica", "nuclear", "solar", "termica"]
                                   )

mean_filler = MissingValuesFiller(fill="auto")

target_series_filled = mean_filler.transform(target_series)
past_covariates_filled = mean_filler.transform(past_covariates)

#target scalling
target_scaler = Scaler()
target_series_scaled = target_scaler.fit_transform(target_series)

#past covariates scalling
past_covariates_scaler = Scaler()
past_covariates_scaled = past_covariates_scaler.fit_transform(past_covariates)


#spliting the train and validation
train_target, val_target = target_series_scaled.split_before(0.9)
train_covariates, val_covariates = past_covariates_scaled.split_before(0.9)

#the model details, nothing fancy
model = NBEATSModel(
    input_chunk_length=1440*7, #1 week of data as input to predict 1 day
    output_chunk_length=1440,
    n_epochs=50,
    random_state=42
)

#train the model
model.fit(train_target,past_covariates=train_covariates ,verbose=True)

#saving model
model.save("ml_service/models/nbeats_total_generation_model_mean_filler.pt")


#saving scalers
with open("ml_service/models/scalers/target_scaler.pkl", 'wb') as f:
    pickle.dump(target_scaler, f)

with open("ml_service/models/scalers/covariates_scaler.pkl", 'wb') as f:
    pickle.dump(target_scaler, f)