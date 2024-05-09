const body_color = document.querySelector('body');
const greenBtn = document.getElementById('green');
const redBtn = document.getElementById('red');
const blueBtn = document.getElementById('blue');
const randomBtn = document.getElementById('random');

greenBtn.addEventListener('click', function (event) {
    event.preventDefault;
    color = `rgb(0, 128, 0)`;
    body_color.style.background = color;
});
redBtn.addEventListener('click', function (event) {
    event.preventDefault;
    color = `rgb(255, 0, 0)`;
    body_color.style.background = color;
});
blueBtn.addEventListener('click', function (event) {
    event.preventDefault;
    color = `rgb(0, 0, 255)`;
    body_color.style.background = color;
});
randomBtn.addEventListener('click', function (event) {
    event.preventDefault;
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    genColor = `rgb(${r}, ${g}, ${b})`;
    body_color.style.background = genColor;
    randomBtn.innerText = genColor;
});
