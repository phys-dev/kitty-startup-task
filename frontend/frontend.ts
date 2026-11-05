import * as express from "express";
import { chmodSync, rmSync } from "fs";
import * as path from "path";

const app = express();
app.set('views', path.join(__dirname, '/'));
app.set('view engine', 'jade');

const socket = "/tmp/frontend.sock";
const backendUrl = "http://backend:3000";

app.get('/', async (req, res) => {
    try {
        const response = await fetch(`${backendUrl}/cat_get`, {
            signal: AbortSignal.timeout(15000)
        });
        if (!response.ok) throw new Error('Backend unavailable');
        const data = await response.text();
        res.render('index.jade', { title: "KITTY Frontend", cat_url: data });
    } catch {
        res.status(502).send('Не удалось загрузить котика. Попробуйте ещё раз.');
    }
});

rmSync(socket, { force: true });
app.listen(socket, () => chmodSync(socket, 0o666));
