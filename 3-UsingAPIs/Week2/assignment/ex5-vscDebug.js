'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-5-using-the-vscode-debugger

Use the VSCode Debugger to fix the bugs
--------------------------------------------------------------- --------------*/
const fetch = require('node-fetch');

async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

function renderLaureate({ knownName, birth, death }) {
  const birthLocation =
    birth.place && birth.place.locationString
      ? birth.place.locationString.en
      : 'Unknown location';

  let result = `Name: ${knownName.en}\nBirth: ${birth.date}, ${birthLocation}`;

  if (death) {
    const deathLocation =
      death.place && death.place.locationString
        ? death.place.locationString.en
        : 'Unknown location';
    result += `\nDeath: ${death.date}, ${deathLocation}`;
  }

  return result;
}

function renderLaureates(laureates) {
  return laureates.map(renderLaureate).join('\n\n');
}

async function fetchAndRender() {
  try {
    const { laureates } = await getData(
      'http://api.nobelprize.org/2.0/laureates?birthCountry=Netherlands&format=json&csvLang=en'
    );

    const renderedOutput = renderLaureates(laureates);
    console.log(renderedOutput);
  } catch (err) {
    console.error('Something went wrong. Please try again later.');
  }
}

fetchAndRender();
