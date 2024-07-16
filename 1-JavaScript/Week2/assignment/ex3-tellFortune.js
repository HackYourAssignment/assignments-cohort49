'use strict';

const numKids = ['1', '2', '3', '4', '5'];
const partnerNames = ['Micheal ', 'Nick', 'Flora', 'Saskia', 'Isabelle'];
const locations = ['Los Angeles', 'Cairo', 'Tokyo', 'Amsterdam', 'Tehran'];
const jobTitles = [
  'Software Engineer',
  'Nurse',
  'Artist',
  'Athlete',
  'Designer',
];

function selectRandomly(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function tellFortune(numKids, partnerNames, locations, jobTitles) {
  const numKid = selectRandomly(numKids);
  const partnerName = selectRandomly(partnerNames);
  const location = selectRandomly(locations);
  const jobTitle = selectRandomly(jobTitles);

  return `You will be a ${jobTitle} in ${location}, married to ${partnerName} with ${numKid} kids.`;
}

function main() {
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
