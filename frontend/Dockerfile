FROM node:20-alpine

RUN apk add --no-cache nginx

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

COPY nginx/frontend.conf /etc/nginx/http.d/default.conf

RUN mkdir -p /sockets /run/nginx
ENV SOCKET_PATH=/sockets/frontend.sock

CMD ["sh", "-c", "rm -f $SOCKET_PATH && node frontend.js & nginx -g 'daemon off;'"]
