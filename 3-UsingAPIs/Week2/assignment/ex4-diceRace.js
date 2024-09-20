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
  const dicePromises = dice.map((die) => rollDie(die));

  return Promise.race(dicePromises);
}

// Refactor this function to use async/await and try/catch
async function main() {
  try {
    const result = await rollDice();
    console.log('resolved', result);
  } catch (error) {
    console.log('rejected', error.message);
  }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

/*Explanation
Promise.race() finishes when the first die gives a result, but it doesn't
stop the other dice from rolling. Each die roll is separate and keeps going
on its own. Promises can't cancel tasks that have already started. So, the
other dice keep rolling, even though we don't use their results. This shows
how async tasks can keep running in the background even after we've gotten
the result we needed. It's like a race where one runner crosses the finish
line, but the other runners don't immediately stop - they keep running their
course even though the race is technically over.*/
