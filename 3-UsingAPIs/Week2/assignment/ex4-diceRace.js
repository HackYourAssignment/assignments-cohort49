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

function rollDice() {
  const dice = [1, 2, 3, 4, 5];

  // Use .map() to create an array of promises for each die
  const dicePromises = dice.map(() => rollDie());

  // Return the result of the first resolved promise using Promise.race()
  return Promise.race(dicePromises);
}

// Refactor this function to use async/await and try/catch
async function main() {
  try {
    const result = await rollDice();
    console.log('Resolved!', result);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}

module.exports = rollDice;

/*
Why do some dice continue rolling after Promise.race() resolves?

Promise.race() resolves or rejects as soon as the first promise in the array settles (either resolves or rejects). 
However, other promises continue to execute because they are independent asynchronous tasks and Promise.race() 
does not cancel the remaining promises. To stop them, you would need to explicitly handle promise cancellation, 
which JavaScript's built-in Promises do not support natively.
*/
