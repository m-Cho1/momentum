const quotes = [
  {
    quote: "Nothing is impossible. The word itself says I'm possible!",
    author: "Audrey Hepburn"
  },
  {
    quote: "Belief creates the actual fact.",
    author: "William James"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "When it comes to luck, you make your own.",
    author: "Bruce Springsteen"
  },
  {
    quote: "We generate fears while we sit. We overcome them by action.",
    author: "Dr. Henry Link"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison"
  },
  {
    quote: "The man who does not read has no advantage over the man who cannot read.",
    author: "Mark Twain"
  },
  {
    quote: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey"
  },
  {
    quote: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill"
  },
  {
    quote: "Success only comes to those who dare to attempt.",
    author: "Mallika Tripathi"
  },
  {
    quote: "To improve is to change; to be perfect is to change often.",
    author: "Winston Churchill"
  },
]

const $quote = document.querySelector('#quote span:first-child');
const $author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log('Today\'s quote: ', todaysQuote);

$quote.innerText = todaysQuote.quote;
$author.innerText = todaysQuote.author;
