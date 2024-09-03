/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/3-UsingAPIs/Week1#exercise-4-throw-the-dice-for-a-poker-dice-game

For this exercise you should do the following:
  - Refactor the `rollDice()` function to throw five dice in one go, by 
    using `.map()` on the `dice` array to create an array of promises for use 
    with `Promise.all()`.
  - A successful (i.e. resolved) throw should output a message similar to: 
      Resolved! [ 'JACK', 'QUEEN', 'QUEEN', 'NINE', 'JACK' ]
  - An unsuccessful (i.e. rejected) throw should output a message similar to:
      Rejected! Die 3 rolled off the table.

The provided rollDie() function logs the value of a die as it rolls, 
time-stamped with the time of day (with millisecond accuracy) to the console. 
Once you have successfully completed this exercise you will notice that the 
intermediate messages are output in bursts of up to five at a time as the dice 
finish rolling asynchronously.

You may also notice that, in the case of a rejected promise, dice that have not
yet finished their roll continue to do so. 
Can you explain why? Please add your answer as a comment to the end of the 
exercise file.
------------------------------------------------------------------------------*/

// The line below makes the rollDie() function available to this file.
// Do not change or remove it.
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5]; // Array representing dice
  const diePromises = dice.map((dieNumber) => {
    return rollDie(dieNumber)
      .then((result) => ({ success: true, result }))
      .catch((error) => ({ success: false, dieNumber, error }));
  });

  return Promise.all(diePromises).then((results) => {
    const successfulRolls = results
      .filter((r) => r.success)
      .map((r) => r.result);
    const failedRolls = results.find((r) => !r.success);

    if (failedRolls) {
      // If any die failed
      throw new Error(`Die ${failedRolls.dieNumber} rolled off the table.`);
    } else {
      // All dice rolled successfully
      return successfulRolls;
    }
  });
}

function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}

module.exports = rollDice;

/*
  When a dice roll fails and a promise is rejected, Promise.all() immediately gives up and stops waiting for the other promises to finish. 
  But the `rollDie()` calls that were already started keep going in the background. 
  That’s why you might still see messages for dice that haven't finished rolling, even though one of them has already failed.

  So, when `Promise.all()` detects a failure.
  It doesn’t actually stop the ongoing dice rolls,
  it just means we are not longer paying attention to their results. 
  This is why some dice might still complete their roll and show their results,
  even after one has already failed.
*/
