'use strict';
const { error } = require('winston');
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-3-roll-an-ace

1. Run the unmodified exercise and observe that it works as advertised. Observe 
   that the die must be thrown an indeterminate number of times until we get an 
   ACE or until it rolls off the table.
2. Now, rewrite the body of the `rollDieUntil()` function using async/await and 
   without using recursion. Hint: a `while` loop may come handy.
3. Refactor the function `main()` to use async/await and try/catch.
------------------------------------------------------------------------------*/
// ! Do not change or remove the next two lines
const rollDie = require('../../helpers/pokerDiceRoller');

async function rollDieUntil(wantedValue) {
  // TODO: rewrite this function using async/await
  let value;
  do {
    value = await rollDie();
  } while (value !== wantedValue);
  return value;
}

// TODO refactor this function to use try/catch
async function main() {
  const result = await rollDieUntil('ACE');
  try {
    console.log('Resolved!', result);
  } catch {
    console.log('Rejected!', error);
  }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDieUntil;
