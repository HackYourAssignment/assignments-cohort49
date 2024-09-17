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
  createAndAppend('td', tr, { text: value });
}

function renderLaureate(ul, { knownName, birth, death }) {
  const li = createAndAppend('li', ul);
  const table = createAndAppend('table', li);

  // Handle optional fields
  addTableRow(table, 'Name', knownName ? knownName.en : 'N/A');
  addTableRow(table, 'Birth', birth ? `${birth.date || 'N/A'}, ${birth.place ? `${birth.place.city ? birth.place.city.en : 'Unknown city'}, ${birth.place.country ? birth.place.country.en : 'Unknown country'}` : 'N/A'}` : 'N/A');
  addTableRow(table, 'Death', death ? `${death.date || 'N/A'}, ${death.place ? `${death.place.city ? death.place.city.en : 'Unknown city'}, ${death.place.country ? death.place.country.en : 'Unknown country'}` : 'N/A'}` : 'N/A');
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

    laureates.forEach((laureate) => {
      console.log('Birth place:', laureate.birth ? laureate.birth.place : 'N/A');
      console.log('Death place:', laureate.death ? laureate.death.place : 'N/A');
    });

    renderLaureates(laureates);
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
  }
}


window.addEventListener('load', fetchAndRender);
