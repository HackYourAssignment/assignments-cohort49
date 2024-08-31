'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
const cat = document.querySelector('img');
const windowWidth = window.innerWidth;
const catWidth = cat.width;
const danceCatUrl =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
const originalCatUrl = cat.src;
const middlePosition = windowWidth / 2 - catWidth / 2;

let currentPosition = 0;

cat.style.position = 'absolute';
cat.style.left = currentPosition + 'px';

function moveCat(distance, duration) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    const startLeft = currentPosition;

    function animate() {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      const fractionComplete = Math.min(elapsedTime / duration, 1);
      const newPosition = startLeft + distance * fractionComplete;

      currentPosition = newPosition;
      cat.style.left = currentPosition + 'px';

      if (startLeft < middlePosition && newPosition >= middlePosition) {
        cat.src = danceCatUrl;
        setTimeout(() => {
          cat.src = originalCatUrl;
          resolve();
        }, 5000);
      } else if (fractionComplete < 1) {
        requestAnimationFrame(animate);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(animate);
  });
}

function catWalk() {
  moveCat(windowWidth - catWidth - currentPosition, 3000).then(() => {
    if (currentPosition < windowWidth - catWidth) {
      return catWalk();
    } else {
      currentPosition = 0;
      return catWalk();
    }
  });
}

catWalk();
