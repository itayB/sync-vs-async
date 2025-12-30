import time
from flask import Flask

app = Flask(__name__)


@app.route("/hello")
def get_blocking_example():
    # Simulate a blocking operation like a time-consuming computation or I/O task
    time.sleep(0.5)
    return {"Hello": "World"}
