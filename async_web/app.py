import time

from fastapi import FastAPI

app = FastAPI()


@app.get("/hello")
def get_blocking_example():
    # Simulate a blocking operation like a time-consuming computation or I/O task
    # Here we keep the same delay as in the sync version for comparison although it's blocking
    # and we could use asyncio.sleep for a non-blocking delay and even better concurrency.
    time.sleep(0.5)
    return {"Hello": "World"}
