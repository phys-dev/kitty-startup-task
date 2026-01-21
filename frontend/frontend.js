const express = require("express");
const path = require("path");
const fs = require("fs")

const app = express();
app.set('views', path.join(__dirname, '/'));
app.set('view engine', 'jade');

const socketPath = "/sockets/frontend.sock";
const backendUrl = "http://backend:8080";

app.get('/', async (req, res) => {
    const cat_data = await fetch(`${backendUrl}/cat_get`);
    const data = await cat_data.text();

    res.render('index.jade', { title: "KITTY Frontend", cat_url: data });
});

app.listen(socketPath, () => {
    try{ fs.chmodSync(socketPath, parseInt("777",8))} catch (e) { console.log(e);}
    console.log(`Frontend app listening on port ${socketPath}`)
})
