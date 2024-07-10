'use strict';
function selectRandomly(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function tellFortune(numKids, partnerNames, locations, jobTitles) {
  const selectedNumKids = selectRandomly(numKids);
  const selectedPartnerName = selectRandomly(partnerNames);
  const selectedLocation = selectRandomly(locations);
  const selectedJobTitle = selectRandomly(jobTitles);

  return `You will be a ${selectedJobTitle} in ${selectedLocation}, married to ${selectedPartnerName} with ${selectedNumKids} kids.`;
}

function main() {
  const numKids = [1, 2, 3, 4, 5];
  const partnerNames = ['Alice', 'Bob', 'Charlie', 'Dana', 'Eve'];
  const locations = ['New York', 'Los Angeles', 'Paris', 'Tokyo', 'Sydney'];
  const jobTitles = ['engineer', 'artist', 'chef', 'teacher', 'scientist'];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
