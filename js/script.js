/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// DATA -- array of quote objects
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


// fill an array with a number for each index present 
let indexes = [];
  for (let i = 0; i < quotes.length; i++){
    indexes[i] = i;
  }

// FUNCTION returns a random quote from quotes array - does not repeat
const getRandomQuote = () => {
  // check in everything in indexes is null
  if (!indexes.every(n => n === null)){
    //find random index that is still in indexes array
    let random;
      do {
        random = Math.floor(Math.random() * (quotes.length));
      } while (!indexes.includes(random));
      // once found set index to null and return
      indexes[random] = null;
      return quotes[random];
    // if NULL  
  } else {
    //reset array
    for (let i = 0; i < quotes.length; i++){
      indexes[i] = i;
    }
    // return the call again with new values of index
    return getRandomQuote();
  }
}


let var1;
//FUNCTION Create new html AND update the value of the 'quote-box' element
const printQuote = () => {
  //clear any intervals already set 
  clearInterval(var1);
  // change quote and background color once
  displayQuote(getRandomQuote());
  randomBackgroundColor();
  // set to repeat actions every 10 seconds
  var1 = setInterval(() => {
    displayQuote(getRandomQuote());
    randomBackgroundColor();
  }, 10000);
}


const displayQuote = (quote) => {
  //get random quote from our hard-coded array
  
 
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

// EVENT - listen for click event at the element with id 'load-quote'
document.getElementById('load-quote').addEventListener("click", printQuote, false);


//displays first quote and sets interval when page loads
printQuote();



