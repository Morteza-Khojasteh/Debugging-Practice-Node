const express = require("express");
const app = express();

const quotes = require("./quotes.json");

app.get("/", (request, response) => {
  response.send(
    "Debugging exercise.  GET for /quotes/search?word=the returns an empty array!  Why?"
  );
});

//Displays all quotes
app.get("/quotes", (request, response) => {
  response.json(quotes);
});

app.get("/quotes/search", (request, response) => {
  const searchWord = request.query.word;
  const result = search(searchWord);
  response.send(result);
});

//Display quote matching an id
app.get("/quotes/:id?", (request, response) => {
  const inputId = request.params.id;
  if (inputId) {
    const quote = quotes.filter(res => res.id == inputId);
    response.json(quote);
  }
});

//search by a term
function search(word) {
  return quotes.filter(quote => quote.quote.includes(word));
}


app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port 3000");
});
