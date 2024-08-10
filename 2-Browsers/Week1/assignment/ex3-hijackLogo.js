'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
   const logo = document.querySelector('img[src*="google"]');
   if (logo) {
        const hackYourFutureLogo = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
        logo.src = hackYourFutureLogo;
        logo.srcset = hackYourFutureLogo;
      } else {
        console.log('Google not found.');
      }
}

hijackGoogleLogo();