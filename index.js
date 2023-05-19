const express = require("express");
const app = express();

app.listen(process.env.PORT || 8000);

app.get("/ping", (req, res) => {
	res.send({ message: "pong" });
});

module.exports = app;
