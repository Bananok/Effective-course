const minutes = localStorage.getItem('minutes')
const seconds = localStorage.getItem('seconds')
const timerState = localStorage.getItem('timerState');
const timerInputs = document.querySelectorAll(".timer-input");
const timeButtons = document.querySelectorAll(".time-button");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");
const endMusic = new Audio("./assets/vika.mp3");
let timer;

timerInputs[0].addEventListener('input', () => {
    localStorage.setItem('minutes', timerInputs[0].value);
})
timerInputs[1].addEventListener('input', () => {
    localStorage.setItem('seconds', timerInputs[1].value);
})

!minutes && !seconds ? setTime(0, 0): setTime(minutes, seconds);
    switch (timerState) {
        case "start": start();
            break;
        case "stop": stop();
            break;
        case "end": end();
            break
    }

function start() {
    localStorage.setItem('timerState', 'start');
    endMusic.currentTime = 0;
    setTime(timerInputs[0].value, timerInputs[1].value)
    if (timerInputs[0].value === '0' && timerInputs[1].value === '0') {
        console.error("Введите корректное время")
        return;
    }
    lockTimerInputs();
    lockTimeButtons();
    startButton.disabled = true;
    stopButton.disabled = false;
    timer = setInterval(() => oneTick(), 1000);
}

function stop() {
    localStorage.setItem('timerState', 'stop');
    clearInterval(timer);
    lockTimerInputs();
    lockTimeButtons();
    startButton.disabled = false
    stopButton.disabled = true
}

function reset() {
    localStorage.removeItem('timerState');
    endMusic.pause()
    clearInterval(timer);
    unlockTimeButtons();
    unlockTimerInputs();
    unlockTimerButtons();
    setTime(0, 0);
    document.body.style.backgroundColor = 'rgb(255, 255, 255)';
}

function setTime(minutes, seconds) {
    if (seconds>59) {
        localStorage.setItem('seconds', 59);
        timerInputs[1].value = 59;
    } else {
        localStorage.setItem('seconds', seconds);
        timerInputs[1].value = seconds;
    }
    localStorage.setItem('minutes', minutes);
    timerInputs[0].value = minutes;
}

function end() {
    localStorage.setItem('timerState', 'end');
    lockTimerInputs();
    lockTimeButtons();
    endMusic.play()
    document.body.style.backgroundColor = 'rgb(246, 128, 128)';
    clearInterval(timer);
    setTime(0, 0);
    lockTimerButtons();
}

function oneTick() {
    const time = [Number(timerInputs[0].value), Number(timerInputs[1].value)];
    console.log(time);
    let seconds = time[0] * 60 + time[1];
    --seconds;
    if (seconds <= 0) {
        end()
        return
    } 
    const remaingTime = [Math.floor(seconds / 60), seconds % 60];
    console.log(remaingTime);
    setTime(remaingTime[0], remaingTime[1]);
}

function lockTimeButtons() {
    timeButtons[0].disabled = true;
    timeButtons[1].disabled = true;
    timeButtons[2].disabled = true;
}

function unlockTimeButtons() {
    timeButtons[0].disabled = false;
    timeButtons[1].disabled = false;
    timeButtons[2].disabled = false;
}

function lockTimerInputs() {
    timerInputs[0].disabled = true;
    timerInputs[1].disabled = true;
}

function unlockTimerInputs() {
    timerInputs[0].disabled = false;
    timerInputs[1].disabled = false;
}

function lockTimerButtons() {
    startButton.disabled = true;
    stopButton.disabled = true;
}

function unlockTimerButtons() {
    startButton.disabled = false;
    stopButton.disabled = false;
}