'use strict';
const cat = document.querySelector('img');

cat.style.left = '0px';

const originalCatSrc = cat.src;
const dancingCatSrc = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
let isDancing = false;

function catWalk() {
  if (isDancing) return;

  let currentLeft = parseInt(cat.style.left);
  cat.style.left = (currentLeft + 10) + 'px';

  if (currentLeft > window.innerWidth - cat.width) {
    cat.style.left = '0px';
  }

  if (currentLeft > (window.innerWidth - cat.width) / 2 && currentLeft < (window.innerWidth - cat.width) / 2 + 10) {
    isDancing = true;
    cat.src = dancingCatSrc;
    setTimeout(() => {
      cat.src = originalCatSrc;
      isDancing = false;
    }, 5000);
  }
}

setInterval(catWalk, 50);
