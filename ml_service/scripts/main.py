from fastapi import FastAPI

app = FastAPI(
    title="Generation Forecasting API",
    description="API for predicting total generation using an NBEATS model.",
    version="1.0.0"
    )

#root endpoint, just for checking
@app.get("/")
def read_root():
    return{"message": "API is working!"}


# @app.post("/predict")
# def predict(request: PredictRequest):