const express = require('express');
const app = express();
const routes = require(express.Router());

app.get("/", (req, res) => {
    routes.send("Hola mundo");
});