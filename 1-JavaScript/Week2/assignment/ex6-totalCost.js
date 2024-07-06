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
  chips : 1.75,
  cake: 2.60,
  candy: 0.99,
  juice: 1.30,
  beers: 3.15
  // TODO complete this object
};


function calculateTotalPrice(numberCart) {
  let amount = 0;

  for(let number in numberCart){
    amount += numberCart[number];
  }
  return `Total: €${amount}`;
  // TODO replace this comment with your code
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length === 1);
  // TODO replace this comment with your code
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const expected = "Total: €9.79";
  const result = calculateTotalPrice(cartForParty);
  console.assert(result === expected);
  // TODO replace this comment with your code
}

function test() {
  test1();
  test2();
}

test();
