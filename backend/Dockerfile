FROM python:3.12-slim
RUN apt-get update && apt-get install -y --no-install-recommends nginx \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY backend.py .
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 3000
CMD ["sh", "-c", "nginx && exec gunicorn --bind unix:/tmp/backend.sock backend:app"]
