# Стадия 1 — сборка TypeScript
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY frontend.ts index.jade ./
RUN npx tsc frontend.ts

# Стадия 2 — nginx + node + supervisord
FROM alpine:3.20

# nginx, node, supervisord
RUN apk add --no-cache nginx nodejs supervisor

WORKDIR /app
COPY --from=build /app /app

COPY nginx.conf /etc/nginx/http.d/default.conf
COPY supervisord.conf /etc/supervisord.conf

EXPOSE 80

CMD ["supervisord", "-c", "/etc/supervisord.conf"]