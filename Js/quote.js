const quotes = [
    {
        quote: "If I cannot do great things, I can do small things in a great way.",
        author: "Martin Luther King, Jr",
    },
    {
        quote: "Be the change that you wish to see in the world." ,
        author: "Mahatma Ghandi",
    },
    {
        quote: "Opportunity is missed by most people because it is dressed in overalls and looks like work." ,
        author: "Thomas Edison",
    },
    {
        quote: "The most difficult thing is the decision to act; the rest is merely tenacity.",
        author: "Amelia Earhart",
    },
    {
        quote: "The bad news is time flies. The good news is you're the pilot." ,
        author: "Michael Altshuler",
    },
    {
        quote: "You get what you give.",
        author: "Jennifer Lopez",
    },
    {
        quote: "If what you have done yesterday still looks big to you, you haven't done much today.",
        author: "Mikhail Gorbachev",
    },
    {
        quote: "In the long run, you make your own luck — good, bad, or indifferent.",
        author: "Loretta Lynn",
    },
    {
        quote: "If my mind can conceive it, if my heart can believe it, then I can achieve it." ,
        author: "Muhammad Ali",
    },
    {
        quote: "Nothing is impossible. The word itself says 'I'm possible!'",
        author: "Audrey Hepburn",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;