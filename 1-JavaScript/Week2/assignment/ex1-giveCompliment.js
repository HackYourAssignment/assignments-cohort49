'use strict';

function giveCompliment(name) {

  const compliments = ["great","nice","amazing","very good","strong","perfect","very cool","fantastic","brilliant","awesome"];
  let random = compliments[Math.floor(Math.random() * compliments.length)];
  return `You are ${random} ${name}!`
}

console.log(giveCompliment("Fatemeh"));
console.log(giveCompliment("Fatemeh"));
console.log(giveCompliment("Fatemeh"));

function main() {
 
  const myName = 'Fatemeh';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Amsterdam';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

console.log(main())
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
