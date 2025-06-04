from airflow import DAG
from airflow.operators.bash import BashOperator
from datetime import datetime, timedelta

default_args = {
    "owner": "filipe",
    "retries": 1,
    "retry_delay": timedelta(minutes=5)
}

with DAG(dag_id="energy_training_pipeline", 
         default_args=default_args,
         start_date=datetime(2025, 1, 1),
         schedule_interval="@daily",
         catchup=False) as dag:
     
     train_model = BashOperator(
          task_id="train_model_task",
          bash_command="python3 /Users/filipemattar/Developer/solo-project/ml_service/scripts/train_model.py"
     )

     train_model
