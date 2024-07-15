'use strict';

const cartForParty = {
  beer : 1.50,
  bread : 2,
  sauce : 1.20,
  egg : 6.50,
  milk : 1.80
};

function calculateTotalPrice(shoppingCart) {
  let total = 0;
  Object.keys(shoppingCart).forEach(key => {
    total += shoppingCart[key];
  });
  
  return `total : €${total.toFixed(2)}`;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  
  console.assert(calculateTotalPrice.length === 1, 'calculateTotalPrice should take one parameter');
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  
  const expected = 'total : €13.00';
  const actual = calculateTotalPrice(cartForParty);

  console.assert(actual === expected, `Expected "${expected}", but got "${actual}"`);
}

function test() {
  test1();
  test2();
}
test();
