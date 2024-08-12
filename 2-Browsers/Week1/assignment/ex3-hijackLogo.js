'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  const originalLogo = document.querySelector('#hplogo');
  if (originalLogo) {
    originalLogo.src =
      'https://cdn.prod.website-files.com/62745a1007e49e2461fb7ecd/62745a1007e49e6f2afb7fd1_HYF.svg';

    originalLogo.srcset =
      'https://cdn.prod.website-files.com/62745a1007e49e2461fb7ecd/62745a1007e49e6f2afb7fd1_HYF.svg 450w, https://cdn.prod.website-files.com/62745a1007e49e2461fb7ecd/62745a1007e49e6f2afb7fd1_HYF.svg 750w, https://cdn.prod.website-files.com/62745a1007e49e2461fb7ecd/62745a1007e49e6f2afb7fd1_HYF.svg 1000w';
  } else {
    return 'Logo not found';
  }
}

hijackGoogleLogo();
