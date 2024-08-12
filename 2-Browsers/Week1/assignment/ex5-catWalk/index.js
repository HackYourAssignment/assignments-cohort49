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
const catwalking = cat.src;
let currentLeft = 0;
cat.style.left = currentLeft + 'px';

function changeImageSource(newSource) {
  if (cat.src === newSource) {
    return;
  } else {
    cat.src = newSource;
  }
}

let catDancing;

function catWalk() {
  if (currentLeft > window.innerWidth) {
    currentLeft = 0;
    cat.style.left = '0px';
  }

  const middle = window.innerWidth / 2;
  if (currentLeft > middle - 10 && currentLeft < middle + 10) {
    if (catDancing === undefined) {
      const tenor =
        'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
      changeImageSource(tenor);
      catDancing = new Date().getTime();
    } else {
      let now = new Date().getTime();
      if (now > catDancing + 5000) {
        catDancing = undefined;
        currentLeft += 20;
        cat.style.left = currentLeft + 'px';
      }
    }
  } else {
    currentLeft += 10;
    cat.style.left = currentLeft + 'px';

    changeImageSource(catwalking);
  }
}

// TODO execute `catWalk` when the browser has completed loading the page
setInterval(catWalk, 50);
