const express = require("express");
const app = express();

const quotes = require("./quotes.json");

app.get("/", (request, response) => {
  response.status(200).send("Ask me for /quotes");
});

app.get("/quotes", (request, response) => {
  response.json(quotes);
});

app.listen(process.env.PORT || 3000);