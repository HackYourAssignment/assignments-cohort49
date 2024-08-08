'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const main = () => {
  const nickName = document.querySelector('#nickname');
  const favFood = document.querySelector('#fav-food');
  const homeTown = document.querySelector('#hometown');
  const liElements = document.querySelectorAll('ul li ');

  nickName.textContent = 'Alexander';
  favFood.textContent = 'Pasta';
  homeTown.textContent = 'Kharkiv';

  liElements.forEach((li) => {
    li.classList.add('list-item');
  });
};

main();
