'use strict';

function calculateDogAge(humanAge) {
  const puppyAge = humanAge * 7 ;

  return `Your doggie is ${puppyAge} years old in dog years!`
}

function main() {
  console.log(calculateDogAge(1));  
  console.log(calculateDogAge(2)); 
  console.log(calculateDogAge(3)); 
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = calculateDogAge;
