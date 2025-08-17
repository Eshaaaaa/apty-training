const countdownInput = document.getElementById("countdownInput");
const countdownDisplay = document.getElementById("countdownDisplay");
const startCountdownBtn = document.getElementById("startCountdownBtn");
let countdownInterval;

startCountdownBtn.addEventListener("click", () => {
    let timeLeft = parseInt(countdownInput.value) || 0;
    
    clearInterval(countdownInterval);
    countdownDisplay.textContent = `Time Remaining: ${timeLeft}`;

    countdownInterval = setInterval(() => {
        timeLeft--;
        countdownDisplay.textContent = `Time Remaining: ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            alert("Time's up!");
        }
    }, 1000);
});

const stopwatchDisplay = document.getElementById("stopwatchDisplay");
const startStopwatchBtn = document.getElementById("startStopwatchBtn");
const stopStopwatchBtn = document.getElementById("stopStopwatchBtn");
const resetStopwatchBtn = document.getElementById("resetStopwatchBtn");

let stopwatchInterval;
let elapsedTime = 0;

startStopwatchBtn.addEventListener("click", () => {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            elapsedTime++;
            stopwatchDisplay.textContent = `Elapsed Time: ${elapsedTime}`;
        }, 1000);
    }
});

stopStopwatchBtn.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
});

resetStopwatchBtn.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    elapsedTime = 0;
    stopwatchDisplay.textContent = `Elapsed Time: ${elapsedTime}`;
});