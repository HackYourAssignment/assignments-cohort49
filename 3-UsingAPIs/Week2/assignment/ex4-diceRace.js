'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-4-dice-race

1. Complete the function `rollDice()` by using `.map()` on the `dice` array 
   to create an array of promises for use with `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dice continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDie = require('../../helpers/pokerDiceRoller');

async function rollDice() {
  const dice = [1, 2, 3, 4, 5];

  const dicePromises = dice.map(() => rollDie());
  try {
    const result = await Promise.race(dicePromises);
    return result;
  } catch (error) {
    throw new Error('Error: ', error);
  }
}

// Refactor this function to use async/await and try/catch

async function main() {
  try {
    const results = await rollDice();
    console.log('Resolved!', results);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

// the reason while using Promise.race(), when promise is resolved or rejected it doesnt stop other promises from executing.
// in our case one dice finished rolling, the other dice will still continue rolling in the background.
