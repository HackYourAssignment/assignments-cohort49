'use strict';

const cartForParty = {
  beer: 15.5,
  chocolate: 4.2,
  cracker: 2.9,
  soda: 3.9,
  cheese: 7.39,
};

function calculateTotalPrice(cart) {
  let totalPrice = 0;

  for (const value of Object.values(cart)) {
    totalPrice += value;
  }
  return `Total: €${totalPrice.toFixed(2)}`;
}

function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(
    typeof calculateTotalPrice === 'function' &&
      calculateTotalPrice.length === 1
  );
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const expected = 'Total: €34.89';
  const result = calculateTotalPrice(cartForParty);
  console.assert(
    result === expected,
    `this was expected: "${expected}", but got this: "${result}"`
  );
}

function test() {
  test1();
  test2();
}

test();
