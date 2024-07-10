'use strict';
function giveCompliment(name) {
  const compliments = [
    'great',
    'awesome',
    'fantastic',
    'amazing',
    'wonderful',
    'outstanding',
    'brilliant',
    'excellent',
    'superb',
    'marvelous',
  ];

  const randomIndex = Math.floor(Math.random() * compliments.length);
  const compliment = compliments[randomIndex];

  return `You are ${compliment}, ${name}!`;
}

function main() {
  const myName = 'Oleksandr';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Amsterdam';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
