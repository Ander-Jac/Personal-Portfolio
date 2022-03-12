const time = document.querySelector('.watch .time')
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')

let seconds = 0;
let interval = null;

//event listeners
startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset)

//Updating The Timer
function timer() {
    seconds++;

    let secs = seconds % 60;
    let mins = Math.floor(seconds / 60) % 60;
    let hrs = Math.floor(seconds / 3600);

    if (secs < 10) {
        secs = "0" + secs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }

    time.innerText = `${hrs}:${mins}:${secs}`;
}

function start() {
    if (interval) {
        return;
    } else {
        interval = setInterval(timer, 1000)
    }
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();

    seconds = 0;
    time.innerText = '00:00:00'
}