'use strict';

const getAnonName = (firstName) => {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      if (!firstName) {
        reject(new Error("You didn't pass in a first name!"));
        return;
      }
        const fullName = `${firstName} Doe`;

        resolve(fullName);
      }, 1000);
    })
    
}

function main() {
  getAnonName('John')
    .then((fullName) => {
      console.log(fullName);
    })
    .catch((error) => {
      console.error(error.message);
    });

  }

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = getAnonName;
