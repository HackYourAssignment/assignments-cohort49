'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

function addOwnInformation(nickname, favFood, hometown) {
  document.querySelector('#nickname').textContent = nickname;
  document.querySelector('#fav-food').textContent = favFood;
  document.querySelector('#hometown').textContent = hometown;
}

function changeStyleName(styleName) {
  document
    .querySelectorAll('li')
    .forEach((item) => item.classList.add(styleName));
}
addOwnInformation('Sonia', 'pizza', 'Lviv');
changeStyleName(`list-item`);
