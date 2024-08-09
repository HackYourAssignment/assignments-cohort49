'use strict';

function hijackGoogleLogo() {
  const googleLogos = document.querySelectorAll('img[alt="Google"]');

  googleLogos.forEach((logo) => {
    logo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
    logo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  });
}

hijackGoogleLogo();
