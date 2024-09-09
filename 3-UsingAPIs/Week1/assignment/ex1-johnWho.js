'use strict';

const getAnonName = (firstName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (firstName) {
        resolve(firstName + ' Doe');
      } else {
        reject(new Error("You didn't pass in a first name!"));
      }
    }, 1000);
  });
};

function main() {
  getAnonName('John')
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = getAnonName;
