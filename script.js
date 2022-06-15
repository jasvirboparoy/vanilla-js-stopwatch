let timerInterval;

let seconds = 0;
let minutes = 0;
let hours = 0;

let timerText = document.getElementById('timer');

const getTimerText = () => {
  let text = "";
  if (hours < 10) {
    text = text.concat("0", hours, ":");
  } else {
    text = text.concat(hours, ":");
  }

  if (minutes < 10) {
    text = text.concat("0", minutes, ":");
  } else {
    text = text.concat(minutes, ":");
  }

  if (seconds < 10) {
    text = text.concat("0", seconds);
  } else {
    text = text.concat(seconds);
  }

  return text;
}

const updateTimerUI = () => {
  timerText.textContent = getTimerText();
}

let startBtn = document.getElementById('start-btn');
startBtn.onclick = () => {
  console.log('Start button clicked');

  // Clear the timer interval first
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      minutes++;
      seconds = 0;

      if (minutes === 60) {
        hours++;
        minutes = 0;
      }
    }

    updateTimerUI();
  }, 1000);
}

let stopBtn = document.getElementById('stop-btn');
stopBtn.onclick = () => {
  console.log('Stop button clicked');
  clearInterval(timerInterval);
}

let resetBtn = document.getElementById('reset-btn');
resetBtn.onclick = () => {
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateTimerUI();
}