FROM node:20-alpine
RUN apk add --no-cache nginx
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
COPY nginx.conf /etc/nginx/http.d/default.conf
EXPOSE 80
CMD ["sh", "-c", "node frontend.js & nginx -g 'daemon off;'"]
