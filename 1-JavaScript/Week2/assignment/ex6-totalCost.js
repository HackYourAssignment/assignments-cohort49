'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  beers: 2.5,
  chips: 1.99,
  soda: 0.99,
  pizza: 8.49,
  cake: 15.99};

function calculateTotalPrice(cart) {
  let total = 0;

  for (let item in cart) {
    total += cart[item];
  }

  return `Total: €${total.toFixed(2)}`;}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  try {
    calculateTotalPrice(); 
    console.log('✘ Test 1 failed: calculateTotalPrice did not throw an error for missing parameter');
  } catch (error) {
    console.log('✔ Test 1 passed: calculateTotalPrice correctly threw an error for missing parameter');
  }
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const expectedOutput = 'Total: €29.95';
  const actualOutput = calculateTotalPrice(cartForParty);
  if (actualOutput === expectedOutput) {
    console.log(`✔ Test 2 passed: calculateTotalPrice returned ${expectedOutput}`);
  } else {
    console.log(`✘ Test 2 failed: Expected ${expectedOutput}, but got ${actualOutput}`);
  }
}

function test() {
  test1();
  test2();
}

test();
