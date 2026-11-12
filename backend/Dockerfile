FROM python:3.11-alpine
RUN apk add --no-cache nginx
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
COPY nginx.conf /etc/nginx/http.d/default.conf
EXPOSE 3001
CMD ["sh", "-c", "flask --app backend run --host=127.0.0.1 --port=5000 & nginx -g 'daemon off;'"]
