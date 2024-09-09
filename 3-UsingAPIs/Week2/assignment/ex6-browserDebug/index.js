'use strict';

async function getData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
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
  createAndAppend('td', tr, { text: value });
}

function renderLaureate(ul, laureate) {
  const li = createAndAppend('li', ul);
  const table = createAndAppend('table', li);
  const knownName = laureate.knownName ? laureate.knownName.en : 'Unknown';
  const birthDate = laureate.birth ? laureate.birth.date : 'Unknown';
  const birthPlace = laureate.birth ? laureate.birth.place.locationString : 'Unknown';
  const deathDate = laureate.death ? laureate.death.date : 'Unknown';
  const deathPlace = laureate.death ? laureate.death.place.locationString : 'Unknown';

  addTableRow(table, 'Name', knownName);
  addTableRow(table, 'Birth', `${birthDate}, ${birthPlace}`);
  addTableRow(table, 'Death', `${deathDate}, ${deathPlace}`);
}

function renderLaureates(laureates) {
  const ul = createAndAppend('ul', document.body);
  laureates.forEach((laureate) => renderLaureate(ul, laureate));
}

async function fetchAndRender() {
  try {
    const data = await getData(
      'https://api.nobelprize.org/2.0/laureates?birthCountry=Netherlands&format=json&csvLang=en'
    );
    renderLaureates(data.laureates);
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
  }
}

window.addEventListener('load', fetchAndRender);
