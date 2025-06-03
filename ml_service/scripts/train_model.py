import pymongo
import pandas as pd
import pickle
from datetime import datetime
from darts.models import NBEATSModel
from darts import TimeSeries
from darts.dataprocessing.transformers import Scaler


client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["brasilgenerationdb"]

collection = db["sin"]

docs = list(collection.find({})) 

records = []
for doc in docs:
    source = doc.get("source")
    for entry in doc.get("data", []):
        records.append({
            "instante": entry["instante"],
            "geracao": entry["geracao"],
            "source": source
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
df_for_ml[["eolica", "hidraulica", "nuclear", "solar", "termica"]] = df_for_ml[["eolica", "hidraulica", "nuclear", "solar", "termica"]].astype('float32')


#preparando dados para treino. preciso lidar com os dados em branco da frequencia, coloquei 2000 somente para lembrar de preencher
series = TimeSeries.from_dataframe(df_for_ml, fill_missing_dates=True, 
                                   freq="T" , 
                                   fillna_value=2000, 
                                   value_cols=["eolica", "hidraulica", "nuclear", "solar", "termica"]
                                   ).interpolate()

#scaler para a serie
scaler = Scaler()
series_scaled = scaler.fit_transform(series)


#spliting the train and validation
train, val = series_scaled.split_before(0.9)

#the model details, nothing fancy
model = NBEATSModel(
    input_chunk_length=180,
    output_chunk_length=60,
    n_epochs=50,
    random_state=42
)

#train the model
model.fit(train, verbose=True)


