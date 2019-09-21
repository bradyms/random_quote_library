/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// Logging arry of objects to the console
console.log(quotes);

// Creating the getrandomquote function and passing quotes through it
function getRandomQuote(quotes) {
  // quoteId variable that generates random quote
  var quoteID = Math.floor(Math.random() * quotes.length);
  // this selects the random quote object from quotes
  return quotes[quoteID];
}


// Creating the printquote function
function printQuote() {
  // result variable that calls getrandomquote function while passing quotes through it
  var result = getRandomQuote(quotes);
  // htmlString variable that's set to an empty string           
  var htmlString = '';
  // Using the htmlString variable to build my string 
  htmlString = `<p class="quote">${result.quote}</p>
                <p class="source">${result.source}`;
  // if statement that checks for citation and adds it to htmlString if it exists
  if (result.citation.length > 0) {
    htmlString += `<span class="citation "> ${result.citation},</span`;
  };

  // if statement that checks for year and adds it to htmlString if it exists
  if (result.year.length > 0) {
    htmlString += `<span class="year"> ${result.year}</span>`;
  }
  // closing htmlString with final p tag
  htmlString += `</p>`;

  // thequotebox variable that prints quote box
  var theQuoteBoxDiv = document.getElementById("quote-box");
  theQuoteBoxDiv.innerHTML = htmlString;
}

// instruction givin code
var theLoadQuoteButton = document.getElementById('loadQuote');
theLoadQuoteButton.addEventListener("click", printQuote, false);


