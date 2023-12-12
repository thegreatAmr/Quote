var quote = document.getElementById("quote");
var author = document.getElementById("author");


var quotes = [
  {
    quote: "A room without books is like a body without a soul.",
    author: "― Marcus Tullius Cicero"
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "― Mark Twain"
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "― Friedrich Nietzsche"
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "― Albert Einstein"
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "― Robert Frost"
  },
  {
    quote: "So many books, so little time.",
    author: "― Frank Zappa"
  },
  {
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "― Bernard M. Baruch"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "― Steve Jobs"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "― John Lennon"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "― Winston Churchill"
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "― Peter Drucker"
  },
  {
    quote: "Don't cry because it's over, smile because it happened.",
    author: "― Dr. Seuss"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "― Eleanor Roosevelt"
  }
];


// Keep track of displayed quotes
var displayedQuotes = [];

function newQuote() {
  // Check if all quotes have been displayed
  if (displayedQuotes.length === quotes.length) {
    // Reset the array if all quotes have been displayed
    displayedQuotes = [];
  }

  // Find a random quote that hasn't been displayed
  var random;
  do {
    random = Math.floor(Math.random() * quotes.length);
  } while (displayedQuotes.includes(random));

  // Display the quote
  displayedQuotes.push(random);
  quote.innerHTML = quotes[random].quote;
  author.innerHTML = quotes[random].author;
}