const quotes = [
    "It's hard to beat a person who never gives up.",
    "If you try and lose then it isn't your fault. But if you don't try and we lose, then it's all your fault.",
    "Make a pact with yourself today to not be defined by your past. Sometimes the greatest thing to come out of all your hard work isn't what you get for it, but what you become for it. Shake things up today! Be You...Be Free...Share.",
    'Live the Life of Your Dreams When you start living the life of your dreams, there will always be obstacles, doubters, mistakes and setbacks along the way. But with hard work, perseverance and self-belief there is no limit to what you can achieve.',
    "I'm a greater believer in luck, and I find the harder I work the more I have of it.",
    "Don't wish it were easier. Wish you were better.",
    'The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense.',
    'If people knew how hard I had to work to gain my mastery, it would not seem so wonderful at all.',
    'There are no shortcuts to any place worth going.',
    '...talent means nothing, while experience, acquired in humility and with hard work, means everything.',
    'Determine never to be idle. No person will have occasion to complain of the want of time, who never loses any. It is wonderful how much may be done, if we are always doing',
    'The difference between ordinary and extraordinary is that little extra.',
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
