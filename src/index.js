const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
	res.send({ message: "pong" });
});

module.exports = app;
