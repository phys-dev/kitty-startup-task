FROM python:3.12-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
	nginx \
	&& rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

COPY nginx/backend.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /sockets

ENV SOCKET_PATH=/sockets/backend.sock

CMD ["sh", "-c", "rm -f $SOCKET_PATH && gunicorn -w 2 -b unix:$SOCKET_PATH backend:app & nginx -g 'daemon off;'"]
