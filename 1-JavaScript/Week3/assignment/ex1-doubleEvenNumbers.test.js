// ! Function to be tested
function doubleEvenNumbers(numbers) {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  const doubledEvenNumbers = evenNumbers.map((number) => number * 2);
  return doubledEvenNumbers;
}

// ! Unit test (using Jest)
test('doubleEvenNumbers should take the even numbers and double them', () => {
  const actual = doubleEvenNumbers([1, 2, 3, 4]);
  const expected = [4, 8];
  expect(actual).toEqual(expected);
});
