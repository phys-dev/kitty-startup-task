FROM python:3.12-slim

WORKDIR /app

# nginx + supervisord
RUN apt-get update && apt-get install -y --no-install-recommends \
        nginx \
        supervisor \
    && rm -rf /var/lib/apt/lists/* \
    && rm -f /etc/nginx/sites-enabled/default

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY backend.py .
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 80

CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]