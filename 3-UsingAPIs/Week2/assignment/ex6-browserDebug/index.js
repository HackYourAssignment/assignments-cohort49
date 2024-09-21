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
  ['th', 'td'].forEach((tag, index) => {
    createAndAppend(tag, tr, { text: index === 0 ? label : value });
  });
}

function renderLaureate(ul, { knownName, birth, death }) {
  const li = createAndAppend('li', ul);
  const table = createAndAppend('table', li);
  addTableRow(table, 'Name', knownName.en);

  const birthInfo = `${birth.date}, ${birth.place.locationString.en}`;
  addTableRow(table, 'Birth', birthInfo);

  if (death) {
    const deathInfo = `${death.date}, ${death.place.locationString.en}`;
    addTableRow(table, 'Death', deathInfo);
  }
}

function renderLaureates(laureates) {
  const ul = createAndAppend('ul', document.body);
  for (const laureate of laureates.laureates) {
    renderLaureate(ul, laureate);
  }
}

async function fetchAndRender() {
  try {
    const laureates = await getData(
      'https://api.nobelprize.org/2.0/laureates?birthCountry=Netherlands&format=json&csvLang=en'
    );
    renderLaureates(laureates);
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
  }
}

window.addEventListener('load', fetchAndRender);
