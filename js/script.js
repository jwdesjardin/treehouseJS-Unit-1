/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// hard-coded data descibing quotes 
const quotes = [

  {
    quote: `The impediment to action advances action. What stands in the way becomes the way`,
    source: 'Marcus Aurelius',
    citation: 'Meditations',
    year: '161 - 180 A.D.',
    tags: 'Stoicism'
  },
  {
    quote: `In my walks, every man I meet is my superior in some way, and in that I learn from him.`,
    source: 'Ralph Waldo Emerson'
  },
  {
    quote: `Be tolerant with others and strict with yourself.”`,
    source: 'Marcus Aurelius',
    tags: 'Stoicism'
  },
  {
    quote: `In your actions, don’t procrastinate. In your conversations, don’t confuse. In your thoughts, don’t wander. In your soul, don’t be passive or aggressive. In your life, don’t be all about business.”`,
    source: 'Marcus Aurelius',
    citation: 'Meditations',
    year: '161 - 180 A.D.',
    tags: 'Stoicism'
  },
  {
    quote: `Waste no more time arguing what a good <em>person</em> should be. Be One.”`,
    source: 'Marcus Aurelius',
    citation: 'Meditations',
    year: '161 - 180 A.D.',
    tags: 'Stoicism'
  },
];



// FUNCTION - returns a random element from quotes array
const getRandomQuote = () => {
  // get random index from quote array
  const random = Math.floor(Math.random() * (quotes.length));

  //return the quote at this random index
  return quotes[random];
}


//FUNCTION - Create new html AND update the value of the 'quote-box' element
const printQuote = () => {
  //get random quote from our hard-coded array
  const quote = getRandomQuote();
 
  // insert required quote data into htmlString 
  let htmlString = `<p class='quote'>${quote.quote}</p>
                    <p class='source'>${quote.source}`;

  // add optional quote data if it is included                  
  if(quote.citation){
    htmlString += `<span class='citation'>${quote.citation}</span>`
  }
  if(quote.year){
    htmlString += `<span class='year'>${quote.year}</span>`
  }
  if(quote.tags){
    htmlString += `<br><span>-- ${quote.tags}</span>`
  }

  //close off the second paragraph tag
  htmlString += '</p>';

  // set the value of the quote-box element to our new html
  document.getElementById('quote-box').innerHTML = htmlString;

  //change the background to a random color 
  randomBackgroundColor();
}

//FUNCTION sets body background color to random color
const randomBackgroundColor = () => {
  // generate three random numbers between 0-255
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  //set the backgroundColor of the body to color using random values
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
};

// listen for click event at the element with id 'load-quote'
document.getElementById('load-quote').addEventListener("click", printQuote, false);

//call printQuote every 10000 ms or 10 sec
setInterval(() => {
  printQuote();
}, 10000);



