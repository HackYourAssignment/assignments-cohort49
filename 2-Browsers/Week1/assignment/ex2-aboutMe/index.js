'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
document.getElementById('nickname').textContent = 'Eli';  // Replace with your nickname
document.getElementById('fav-food').textContent = 'Food 😝';  // Replace with your favorite food
document.getElementById('hometown').textContent = 'Damascos';  // Replace with your hometown

// Iterate through each <li> and change the class to list-item
const listItems = document.querySelectorAll('ul > li');
listItems.forEach(item => {
  item.classList.add('list-item');
});