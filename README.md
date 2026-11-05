# Котики в мир

Запуск:

```bash
docker compose build
docker compose up -d
```

Сайт: http://localhost.

Во frontend Nginx принимает запрос на порту 80 и передаёт его Node через
`/tmp/frontend.sock`. Node запрашивает картинку у `backend:3000/cat_get`.
Во втором контейнере свой Nginx передаёт этот запрос Python через
`/tmp/backend.sock`. Наружу опубликован только порт 80 фронтенда.

Проверка:

```bash
docker compose ps
curl http://localhost
docker compose exec frontend wget -qO- http://backend:3000/cat_get
curl --connect-timeout 2 http://localhost:3000/cat_get
```

Последняя команда должна завершиться ошибкой подключения.
Для получения картинки нужен доступ к The Cat API.

Проверил сборку и запуск в Ubuntu. Страница и внутренний API отвечают,
а порт 3000 с хоста недоступен.

Остановка:

```bash
docker compose down
```
