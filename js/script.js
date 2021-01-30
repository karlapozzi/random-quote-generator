/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Note: I am going for an Exceeds Expectations grade, but don't 
mind if I pass with Meets expectations. 
******************************************/


/***
An array of "famous" quotes from Peloton instructors 
found on pinterest, fan blogs, and social media. Classes property 
notes which type of Peloton classes each instructor teaches. 
***/
let quotes = [
  {
    quote: `Drop your shoulders, and drop your baggage.`,
    source: `Christine D'Ercole`,
    classes: `Cycle and Arms Toning`
  },
  {
    quote: `Are you ready? Yes or yes?`,
    source: `Ally Love`, 
    classes: `Cycle, Barre, and Dance Cardio`
  },
  {
    quote: `If Britney can get through 2007, you can get up this hill!`,
    source: `Cody Rigsby`,
    classes: `Cycle and Bike Bootcamp`
  },
  {
    quote: `You are you and that is your superpower.`,
    source: `Jess King`,
    classes: `Cycle and Tread`
  },
  {
    quote: `We eat fear for breakfast.`,
    source: `Robin Arzón`,
    classes: `Cycle, Tread, Bike Bootcamp, and Strength`
  }, 
  {
    quote: `If you can't be good, be careful.`,
    source: `Denis Morton`,
    classes: `Cycle and Yoga`
  },
  {
    quote: `It's a good day to have a good day.`,
    source: `Tunde Oyeneyin`,
    classes: `Cycle and Bike Bootcamp`
  },
  {
    quote: `It only takes one person to believe in you and that’s YOU!!`,
    source: `Alex Toussaint`,
    citation: `Instagram`,
    year: `2021`,
    classes: `Cycle, Arms Toning, and Core`
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
for the optional quote data and a random background color. Multiple google search
results helped me figure out the document.body.style.backgroundColor part, 
but especially these two articles: 
https://www.tutorialrepublic.com/faq/how-to-change-the-background-color-of-a-web-page-using-javascript.php
https://webplatform.github.io/docs/tutorials/manipulating_css_with_javascript/
***/
function printQuote () {
  let quote = getRandomQuote(quotes);
  let str = `<p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`;
  if (quote.citation) {
    str += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    str += `<span class="year">${quote.year}</span>`;
  }
  str += `</p>`;
  if (quote.classes) {
    str += `<p align="right"> Peloton instructor for ${quote.classes} classes</p>`;
  }
  let colornum = () => Math.floor(Math.random() * 256);
  let randomColor = `rgb(${colornum()}, ${colornum()}, ${colornum()})`;
  document.getElementById('quote-box').innerHTML = str; 
  document.body.style.backgroundColor = randomColor;
}


/***
This automatically updates the quote every 10 seconds.  
***/
const changeQuote = setInterval(printQuote, 10000);


/***
This runs the printQuote function each time the button's clicked. 
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);