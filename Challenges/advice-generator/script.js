CORS_PROXY_URL = "https://api.allorigins.win/get?url=";
BASE_URL = "http://api.forismatic.com/api/1.0/";
GET_URL = "?method=getQuote&format=json&lang=en";

async function getQuoteData() {
  const response = await fetch(CORS_PROXY_URL + encodeURIComponent(BASE_URL + GET_URL));
  const quoteData = response.json();
  return quoteData;
}

async function makeQuoteBox() {
  const quoteData = await getQuoteData();
  document.getElementById("quote-text").textContent=quoteData;
}

window.addEventListener("DOMContentLoaded", () => {
  makeQuoteBox();
});