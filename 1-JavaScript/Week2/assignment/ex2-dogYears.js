'use strict';

function calculateDogAge(age) {
  const dogAge = age * 7;
  return `Your doggie is ${dogAge} years old in dog years!`
}



function main() {
  console.log(calculateDogAge(1)); 
  console.log(calculateDogAge(2)); 
  console.log(calculateDogAge(3)); 
}

console.log(main())


if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = calculateDogAge;
