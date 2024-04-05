var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var apidocsRouter = require("./routes/apidocs");
var produtosRouter = require("./routes/produtos");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api-docs", apidocsRouter);
app.use("/produtos", produtosRouter);

module.exports = app;
