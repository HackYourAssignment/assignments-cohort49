// ! Function to be tested
function doubleEvenNumbers(numbers) {
  return numbers
    .filter((number) => number % 2 === 0)
    .map((number) => number * 2);
}

// ! Unit test (using Jest)
test('doubleEvenNumbers should take the even numbers and double them', () => {
  const actual = doubleEvenNumbers([1, 2, 3, 4]);
  const expected = [4, 8];
  expect(actual).toEqual(expected);
});
