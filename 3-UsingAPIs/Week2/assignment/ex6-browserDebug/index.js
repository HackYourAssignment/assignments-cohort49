/*
Full description at:https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-6-using-the-browser-debugger
*/

'use strict';

async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

function createAndAppend(name, parent, options = {}) {
  const elem = document.createElement(name);
  parent.appendChild(elem);
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'text') {
      elem.textContent = value;
    } else {
      elem.setAttribute(key, value);
    }
  });
  return elem;
}

function addTableRow(table, label, value) {
  const tr = createAndAppend('tr', table);
  createAndAppend('th', tr, { text: label });
  createAndAppend('td', tr, { text: value || 'N/A' }); // Handle missing values with 'N/A'
}

function renderLaureate(ul, { knownName, birth, death }) {
  const li = createAndAppend('li', ul);
  const table = createAndAppend('table', li);

  addTableRow(table, 'Name', knownName.en);

  if (birth) {
    const birthLocation =
      birth.place && birth.place.locationString
        ? birth.place.locationString.en
        : 'Unknown location';
    addTableRow(table, 'Birth', `${birth.date}, ${birthLocation}`);
  } else {
    addTableRow(table, 'Birth', 'N/A');
  }

  if (death) {
    const deathLocation =
      death.place && death.place.locationString
        ? death.place.locationString.en
        : 'Unknown location';
    addTableRow(table, 'Death', `${death.date}, ${deathLocation}`);
  } else {
    addTableRow(table, 'Death', 'N/A');
  }
}

function renderLaureates(laureates) {
  const ul = createAndAppend('ul', document.body);
  laureates.forEach((laureate) => renderLaureate(ul, laureate));
}

async function fetchAndRender() {
  try {
    const { laureates } = await getData(
      'https://api.nobelprize.org/2.0/laureates?birthCountry=Netherlands&format=json&csvLang=en'
    );
    renderLaureates(laureates);
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
  }
}

window.addEventListener('load', fetchAndRender);
