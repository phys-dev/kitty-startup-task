FROM python:3.11-alpine
RUN apk add --no-cache nginx
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
COPY nginx.conf /etc/nginx/http.d/default.conf
EXPOSE 3001
CMD ["sh", "-c", "gunicorn --bind unix:/tmp/backend.sock -m 007 backend:app & nginx -g 'daemon off;'"]
