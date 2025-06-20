<img width="365" alt="Captura de Tela 2025-06-20 às 21 31 05" src="https://github.com/user-attachments/assets/4809a49f-18ca-4169-84b5-5391fb40ae2d" />

GridOps - Brazil

The main goal of the app is to share real time information about Brazil's energy matrix and it's behaviour during the day. 

- Data is requested from ONS (Operador do Sistema Nacional) endpoint.
- Then, data is stored inside a MongoDB timeseries schema, from the different energy sources and divided by region.

The project contains a machine learning server (ML_server), which contains a Python API endpoint that runs a LSTM forecasting models:

- Apache Airflow tool that re-trains the model on a daily basis, and also generate forecasts.
- Endpoint running on FastAPI to get predictions from the database.

Next steps, gathering enough data to have reasonable predictions from the ML model, and them build the frontend component to render forecasting.

