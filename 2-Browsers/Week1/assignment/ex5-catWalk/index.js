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

cat.style.left = '0px';

let danceTimer = 0;
let center = false;
const danceDurationCycles = 5000 / 50; // 5 seconds / 50 ms = 100 cycles

const setImg = (url) => {
  cat.src = url;
};

const nextMove = (position) => {
  if (danceTimer === 0) {
    cat.style.left = position + 10 + 'px';
  } else if (danceTimer > 0 && danceTimer < danceDurationCycles) {
    danceTimer++;
  } else if (danceTimer === danceDurationCycles) {
    setImg('http://www.anniemation.com/clip_art/images/cat-walk.gif');
    danceTimer = 0;
  }
};

const startDancing = () => {
  center = true;
  danceTimer++;
  setImg(
    'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif'
  );
};

const resetPosition = () => {
  cat.style.left = '0px';
  center = false;
};

function catWalk() {
  const position = parseInt(cat.style.left, 10);

  nextMove(position);

  if (!center && position >= window.innerWidth / 2 - cat.naturalWidth / 2) {
    startDancing();
  }

  if (position >= window.innerWidth - cat.naturalWidth) {
    resetPosition();
  }
}

window.onload = () => {
  setInterval(() => {
    catWalk();
  }, 50);
};
