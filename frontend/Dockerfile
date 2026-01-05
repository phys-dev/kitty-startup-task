FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . . 

RUN mkdir -p /sockets
ENV SOCKET_PATH=/sockets/frontend.sock

CMD ["sh", "-c", "rm -f $SOCKET_PATH && node frontend.js"]
