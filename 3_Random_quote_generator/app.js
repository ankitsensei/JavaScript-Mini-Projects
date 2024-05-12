const quotes = [
    "It's hard to beat a person who never gives up.",
    "If you try and lose then it isn't your fault. But if you don't try and we lose, then it's all your fault."
];

const usedIndexes = new Set();
const new_quote = document.getElementById('quotes');
const btn = document.getElementById('btn');

btn.addEventListener('click', function (event) {
    event.preventDefault;
    const randomIdx = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIdx];
    new_quote.innerHTML = randomQuote;
});
