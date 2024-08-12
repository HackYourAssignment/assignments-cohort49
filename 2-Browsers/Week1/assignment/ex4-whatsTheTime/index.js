'use strict';

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const createDiv = document.createElement('div');
  document.body.append(createDiv);

  const updateTime = () => {
    const currentDay = new Date();
    const hours = String(currentDay.getHours()).padStart(2, '0');
    const minutes = String(currentDay.getMinutes()).padStart(2, '0');
    const seconds = String(currentDay.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    createDiv.textContent = currentTime;
  };
  updateTime();
  setInterval(updateTime, 1000);
}
window.addEventListener('load', addCurrentTime);
