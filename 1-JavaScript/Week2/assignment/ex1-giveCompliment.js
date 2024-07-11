'use strict';

function giveCompliment(name) {
  
  const compliments = [
    "great",
    "excellent",
    "amazing",
    "wonderful",
    "brilliant",
    "impressive",
    "fantastic",
    "well done",
    "outstanding",
    "awesome",
  ];

  const random = Math.floor(Math.random() * compliments.length);
  const adj = compliments[random];

  return `You are ${adj}, ${name}!`;
}

function main() {
  
  const myName = 'Nima';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));


  const yourName = 'HackYourFuture';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
