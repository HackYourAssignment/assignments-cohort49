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
  console.log(`\nName: ${knownName.en}`);

  // Check if birth info is available before accessing properties
  if (birth) {
    console.log(
      `Birth: ${birth.date}, ${birth.place?.locationString || 'Unknown place'}`
    );
  } else {
    console.log('Birth information not available');
  }

  // Check if death info is available before accessing properties
  if (death) {
    console.log(
      `Death: ${death.date}, ${death.place?.locationString || 'Unknown place'}`
    );
  } else {
    console.log('Still alive or death information not available');
  }
}

function renderLaureates(laureates) {
  laureates.forEach(renderLaureate);
}

async function fetchAndRender() {
  try {
    // Await the data from getData
    const data = await getData(
      'http://api.nobelprize.org/2.0/laureates?birthCountry=Netherlands&format=json&csvLang=en'
    );

    // Render laureates if data is available
    if (data.laureates) {
      renderLaureates(data.laureates);
    } else {
      console.log('No laureates found.');
    }
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
  }
}

fetchAndRender();
