'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-5-improved-shopping-at-the-supermarket

In the current exercise we will rewrite the `addToShoppingCart` function to make 
it pure. Do the following:

1. Complete the parameter list of `addToShopping()`. As a first parameter it 
   should accept a shopping cart array and as a second parameter it should 
   accept a grocery item to be added.
2. The function should return a new shopping cart array, following the same rule 
   as in the previous exercise: it should contain a maximum of three items.
3. The shopping cart passed as an argument should not be mutated.
4. When constructing the new shopping cart array you should make use of the ES6 
   spread syntax.
5. Confirm that your function passes the provided unit tests.
------------------------------------------------------------------------------*/

// Function under test
function addToShoppingCart(shoppingCart, groceryItem) {
  // If the cart has fewer than 3 items, simply add the new item
  if (shoppingCart.length < 3) {
    return [...shoppingCart, groceryItem];
  } 
  // If the cart already has 3 items, remove the first item and add the new one
  return [...shoppingCart.slice(1), groceryItem];
}

// Test functions (plain vanilla JavaScript)
function test1() {
  console.log('Test 1: addToShoppingCart should take two parameters');
  console.assert(addToShoppingCart.length === 2, 'Expected addToShoppingCart to have two parameters');
}

function test2() {
  console.log('Test 2: addToShoppingCart should be a pure function');
  const initialCart = ['bananas', 'milk'];
  const result1 = addToShoppingCart(initialCart, 'chocolate');
  const result2 = addToShoppingCart(initialCart, 'chocolate');
  console.assert(JSON.stringify(result1) === JSON.stringify(result2), 'Expected results to be the same for identical inputs');
  console.assert(
    JSON.stringify(initialCart) === JSON.stringify(['bananas', 'milk']),
    'Expected initialCart to remain unchanged'
  );
}

function test3() {
  console.log('Test 3: `chocolate` should be added to the cart');
  const initialCart = ['bananas', 'milk'];
  const result = addToShoppingCart(initialCart, 'chocolate');
  console.assert(result.length === 3, 'Expected cart length to be 3');
  console.assert(result.includes('chocolate'), 'Expected cart to contain chocolate');
}

function test4() {
  console.log('Test 4: `waffles` should replace the first item when cart is full');
  const initialCart = ['bananas', 'milk', 'chocolate'];
  const result = addToShoppingCart(initialCart, 'waffles');
  console.assert(result.length === 3, 'Expected cart length to be 3');
  console.assert(result.includes('waffles'), 'Expected cart to contain waffles');
  console.assert(result[0] === 'milk', 'Expected milk to be the first item in the cart');
  console.assert(result[2] === 'waffles', 'Expected waffles to be the last item in the cart');
}

// Run tests
function test() {
  test1();
  test2();
  test3();
  test4();
}

test();
