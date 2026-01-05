FROM python:3.12-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN mkdir -p /sockets
ENV SOCKET_PATH=/sockets/backend.sock

CMD ["sh", "-c", "rm -f $SOCKET_PATH && gunicorn -w 2 -b unix:$SOCKET_PATH backend:app"]
