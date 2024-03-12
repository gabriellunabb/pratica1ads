const express = require("express");

const app = express();

app.listen(3000, () => console.log("API ON!!!!"));

app.get("/", (req, res) => {
    res.status(200).send("Você fez uma requisição GET");
});

app.post("/", (req, res) => {
    res.status(201).send("Você fez uma requisição POST");
});

app.put("/", (req, res) => {
    res.status(200).send("Você fez uma requisição PUT");
});

app.delete("/", (req, res) => {
    res.status(204).send("Você fez uma requisição DELETE");
});

module.exports = app;
