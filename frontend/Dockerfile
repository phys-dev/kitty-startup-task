FROM node:22-alpine
RUN apk add --no-cache nginx
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY frontend.ts index.jade ./
RUN npm run build && npm prune --omit=dev
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["sh", "-c", "nginx && exec node frontend.js"]
