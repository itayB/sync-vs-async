ARG PYTHON_VERSION=3.14.0

FROM python:${PYTHON_VERSION}-slim-trixie
WORKDIR /sync_web
# hadolint ignore=DL3008,DL4006
RUN apt-get update \
  && apt-get install -y --no-install-recommends \
     curl \
     build-essential \
     gcc \
  && curl -LsSf https://astral.sh/uv/install.sh | sh \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

COPY pyproject.toml ./
COPY app.py /sync_web/app.py
RUN /root/.local/bin/uv pip install . --system --no-cache-dir

# hadolint ignore=DL3008
CMD ["uwsgi", "--http", "0.0.0.0:5001", "--master", "-p", "4", "-w", "app:app"]
