/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/***
An array of "famous" quotes from Peloton instructors 
found on pinterest, fan blogs, and social media
***/
let quotes = [
  {
    quote: `Drop your shoulders, and drop your baggage.`,
    source: `Christine D'Ercole`
  },
  {
    quote: `Are you ready? Yes or yes?`,
    source: `Ally Love`
  },
  {
    quote: `If Britney can get through 2007, you can get up this hill!`,
    source: `Cody Rigsby`
  },
  {
    quote: `You are you and that is your superpower.`,
    source: `Jess King`
  },
  {
    quote: `We eat fear for breakfast.`,
    source: `Robin Arzon`
  }, 
  {
    quote: `If you can't be good, be careful.`,
    source: `Denis Morton`
  },
  {
    quote: `It's a good day to have a good day.`,
    source: `Tunde Oyeneyin`
  },
  {
    quote: `It only takes one person to believe in you and that’s YOU‼️`,
    source: `Alex Toussaint`,
    citation: `Instagram`,
    year: `2021`
  }
];


/***
A function that generates a random number from 0 - the length of the quotes array, 
then get the quote that corresponds to that number in the array. This lets you add 
quotes without having to adjust anything else.
***/
function getRandomQuote(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
 }


/***
A function that prints the HTML needed for quotes, including conditional statements 
for the optional quote data. 
***/

function printQuote () {
  let quote = getRandomQuote(quotes);
  let str = `<p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`
  if (quote.citation) {
    str += `<span class="citation">${quote.citation}</span>`
  }
  if (quote.year) {
    str += `<span class="year">${quote.year}</span>`
  }
  str += `</p>`;
  document.getElementById('quote-box').innerHTML = str; 
}


/***
This runs the printQuote function each time the button's clicked. 
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);