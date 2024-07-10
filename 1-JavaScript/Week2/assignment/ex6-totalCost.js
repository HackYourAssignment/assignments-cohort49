'use strict';
const cartForParty = {
  beers: 1.75,
  chips: 0.99,
  soda: 1.5,
  pizza: 4.99,
  cake: 5.5,
};

function calculateTotalPrice(cart) {
  let total = 0;
  for (const item of Object.keys(cart)) {
    total += cart[item];
  }
  return `Total: €${total.toFixed(2)}`;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length === 1);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const expected = 'Total: €14.73';
  const actual = calculateTotalPrice(cartForParty);
  console.assert(actual === expected);
}

function test() {
  test1();
  test2();
}

test();
