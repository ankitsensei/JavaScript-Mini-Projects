// const start = document.querySelector('Start');
// const stop = document.querySelector('Stop');
// const reset = document.querySelector('Reset');
const time = document.getElementById('timer');

let secondsElapsed = 0;
let interval = null;

function padStart(value) {
    return String(value).padStart(2, '0');
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60);
    // const hours = Math.floor(minutes / 60);
    let hours = 0;
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${padStart(hours)}:${padStart(minutes)}:${padStart(
        seconds
    )}`;
}
function timer() {
    secondsElapsed++;
    setTime();
}

function startTimer() {
    if (interval) stopTimer();
    interval = setInterval(timer, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    stopTimer();
    secondsElapsed = 0;
    setTime();
}
