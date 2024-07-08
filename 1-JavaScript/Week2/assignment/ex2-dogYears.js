'use strict';

function calculateDogAge(humanAge) {
  
  const puppyAge = humanAge * 7 ;

  return `you puppy's is : ${puppyAge} years old in dog years.`
}

function main() {
  console.log(calculateDogAge(2));  
  console.log(calculateDogAge(5)); 
  console.log(calculateDogAge(7)); 
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = calculateDogAge;
