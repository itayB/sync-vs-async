# Sync vs Async Python Web Servers

This project demonstrates the difference between synchronous (Flask + uWSGI) and asynchronous (FastAPI) Python web servers under heavy load, using Docker Compose for easy setup.

## What it shows

- **Sync server (Flask + uWSGI):** Drops requests under high load due to listen queue limits, resulting in many 5XX errors and high latency.
- **Async server (FastAPI):** Handles the same load reliably, with lower latency and almost no failed requests.

## How to run

Build and start all services:

```
docker compose up --build
```

Stop and remove all containers:

```
docker compose down
```

## Project structure

- `sync_web/` – Flask app with uWSGI (sync)
- `async_web/` – FastAPI app (async)
- `tester/` – Load generator

## Summary

This setup helps visualize how async Python servers can handle high concurrency more gracefully than traditional sync WSGI servers, which may drop requests under pressure.
