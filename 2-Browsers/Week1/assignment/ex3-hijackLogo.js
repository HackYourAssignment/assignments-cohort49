'use strict';

function hijackGoogleLogo() {
  // Select all elements that might contain the Google logo
  const googleLogos = document.querySelectorAll('img[alt="Google"]');

  // Loop through each logo and replace its src and srcset attributes
  googleLogos.forEach((logo) => {
    logo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
    logo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  });
}

// Execute the function to replace the logos
hijackGoogleLogo();
