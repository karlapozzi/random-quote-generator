/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//"Famous" quotes from Peloton instructors found on pinterest and fan blogs
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
 * `getRandomQuote` function
***/

//Generate a random on number from 0 - the length of the quotes array, then get the corresponding quote
function getRandomQuote(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
 }


/***
 * `printQuote` function
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
  return str; 
}

document.getElementById('quote-box').innerHTML = printQuote(); 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);