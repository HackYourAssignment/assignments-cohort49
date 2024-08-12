'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const nickName = document.getElementById('nickname');
nickName.textContent = 'Looshi';
const favFood = document.getElementById('fav-food');
favFood.textContent = 'Pizza';
const homeTown = document.getElementById('hometown');
homeTown.textContent = "Sana'a";

const ulList = document.querySelectorAll('li');

ulList.forEach((li) => {
  li.classList.add('list-item');
});
