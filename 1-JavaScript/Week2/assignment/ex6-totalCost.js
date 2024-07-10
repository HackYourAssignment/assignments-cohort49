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
  chips: 3.5,
  water: 1.5,
  cake: 30.8,
  coffee: 10,
  nuts: 10,
};

function calculateTotalPrice(cart) {
  const result = [];
  for (const priceList in cart) {
    cart[priceList];
    result.push(cart[priceList]);
  }

  const totalPrice = () => {
    let total = 0;
    for (let i = 0; i < result.length; i++) {
      total += result[i];
    }
    return total;
  };
  return `Total: € ${totalPrice()}`;
 
}

console.log(calculateTotalPrice(cartForParty));
// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length === 1 );
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const expected = 'Total: € 55.8';
  const actual = calculateTotalPrice(cartForParty);
  console.assert(actual === expected);
  
}

function test() {
  test1();
  test2();
}

test();
