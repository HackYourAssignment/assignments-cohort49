'use strict';

function selectRandomly(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array [randomIndex];
}

function tellFortune(numKids, partnerNames, locations, jobTitles) {
  const numKid = selectRandomly(numKids);
  const partnerName = selectRandomly(partnerNames);
  const location = selectRandomly(locations);
  const jobTitle = selectRandomly(jobTitles);

  return `You will be a ${jobTitle} in ${location}, married to ${partnerName} with ${numKid} kids.`;
}

function main() {
  const numKids = [ 
    1,2,3,4,5
  ];

  const partnerNames = [
    "Rosita", "Tatiana", "Sabrina", "Sara","Marina"
  ];

  const locations = [
    "Amsterdam", "Tokyo", "New york", "Berlin", "Lisbon"
  ];

  const jobTitles = [
    "Programmer", "Pilot", "Dentist", "Driver", "Sales Person"
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;

