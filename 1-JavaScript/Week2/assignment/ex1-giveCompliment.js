'use strict';

function giveCompliment(name) {
  const compliments = [
    'great',
    'nice',
    'amazing',
    'very good',
    'strong',
    'perfect',
    'very cool',
    'fantastic',
    'brilliant',
    'awesome',
  ];

  const randomIndex = Math.floor(Math.random() * compliments.length);

  const random = compliments[randomIndex];

  return `You are ${random}, ${name}!`;
}

function main() {
  const myName = 'HackYourFuture!';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Amsterdam';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
