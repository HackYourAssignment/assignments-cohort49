'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const clock = document.querySelector('#clock');
  setInterval(() => {
    const time = new Date();

    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;

    clock.textContent = currentTime;

    console.log(currentTime);

    if (currentTime !== clock.textContent) {
      console.error('not correct');
    }
  }, 1000);
}

window.onload = function () {
  addCurrentTime();
};
