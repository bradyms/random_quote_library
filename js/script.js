/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

console.log(quotes);

/***
  baby step  write all quotes to the screen using a for loop and function
 ***/

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number                            
   - Use the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(quotes) {
  var quoteID = Math.floor(Math.random() * quotes.length);
  return quotes[quoteID];
}
/***
var result = getRandomQuote(quotes);  
console.log(result);
***/

// Create the `printQuote` function to:
function printQuote() {
  // - Call the `getRandomQuote` function and assign it(returned quote object) to a variable.  
  var result = getRandomQuote(quotes);
  // - Create a variable for the HTML string and set it equal to an empty string.              
  var htmlString = '';
  //- Use the HTML template in the instructions or the markup in the index.html file, AND 
  //  the random quote vairable to build your HTML string.
  htmlString = `<p class="quote">${result.quote}</p>
                    <p class="source">${result.source}`;
  if (result.citation.length > 0) {
    htmlString += `<span class="citation "> ${result.citation},</span`;
  };
  if (result.year.length > 0) {
    htmlString += `<span class="year"> ${result.year}</span>`;
  }
  htmlString += `</p>`;

  //console.log(quoteHtml);
  //dad says write the htmlString to console;
  //- Add the quote and source section to the HTML string.
  //- Use an if statement to check for the citation property before adding it to the HTML string.
  //- Use an if statement to check for the year property before adding it to the HTML string.
  //- Don't forget to close that final `p` tag.
  // - Set the `innerHTML` of the `quote-box` div to the HTML string. 
  var theQuoteBoxDiv = document.getElementById("quote-box");
  theQuoteBoxDiv.innerHTML = htmlString;
  //document.getElementById("quote-box").innerHTML = "quote-box";
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/
/*** 
function printQuote(){

  var i = 1;
  i++;
  throw  'printQuote not coded';
}**/
var theLoadQuoteButton = document.getElementById('loadQuote');
theLoadQuoteButton.addEventListener("click", printQuote, false); 
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Remember to delete the comments that came with this file, and replace them with your own code comments.