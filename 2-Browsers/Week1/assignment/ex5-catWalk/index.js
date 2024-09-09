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
function catWalk() {
  const cat = document.querySelector('img');

  //links
  const walkingCat = cat.src;
  const dancingCat =
    'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

  //calculations
  let catPosition = 0;
  const catWidth = cat.width;
  const totalDistance = window.innerWidth - catWidth;
  const theMiddle = totalDistance / 2;
  const inTheEnd = () => totalDistance - catPosition < 10;
  const inTheMiddle = () =>
    catPosition + 0.5 * catWidth >= theMiddle &&
    catPosition + 0.5 * catWidth < theMiddle + 10;

  //updates position and render it
  //temporary image change in the middle for 5 s.
  const update = async () => {
    if (inTheEnd()) catPosition = 0;

    if (inTheMiddle()) {
      clearInterval(move); //stops updating the img

      cat.src = dancingCat; //change
      await wait(5000);
      cat.src = walkingCat; //restore

      move = setInterval(update, 50);
    }

    catPosition += 10; //make a step forward
    cat.style.left = `${catPosition}px`;
  };

  let move = setInterval(update, 50); //update the image every 50 ms
}

window.addEventListener('load', catWalk);

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
//async await seems to provide more comprehensible logic flow than timeout or blocking counters
//ensures blocking the following code in the async function without effecting the rendering and the outside namespace.
