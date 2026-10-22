import * as express from "express";
import * as path from "path";
import * as fs from "fs";

const app = express();
app.set('views', path.join(__dirname, '/'));
app.set('view engine', 'jade');

const socketPath = '/run/frontend.sock';
const backendUrl = "http://backend";

if (fs.existsSync(socketPath)) {
    fs.unlinkSync(socketPath);
}

app.get('/', async (req, res) => {
    const cat_data = await fetch(`${backendUrl}/cat_get`);
    const data = await cat_data.text();
    res.render('index.jade', { title: "KITTY Frontend", cat_url: data });
});

app.listen(socketPath, () => {
    fs.chmodSync(socketPath, 0o777);
    console.log(`Frontend app listening on unix socket ${socketPath}`);
});