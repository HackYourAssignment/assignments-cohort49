'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `HTTP error. Status: ${response.status} Status Text: ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchAndPopulatePokemons(apiUrl) {
  //get pokemons data
  const data = await fetchData(apiUrl);
  if (!data) return;

  const pokemons = data.results;

  //create a select element and a default option
  const selectElement = document.createElement('select');

  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.textContent = 'Select a pokemon';
  selectElement.appendChild(defaultOption);

  //add pokemons as options
  pokemons.forEach((pokemon) => {
    const optionElement = document.createElement('option');

    optionElement.textContent = pokemon.name;
    optionElement.value = pokemon.url;

    selectElement.appendChild(optionElement);
  });

  document.body.appendChild(selectElement);
}

async function fetchImage(url) {
  const data = await fetchData(url);
  if (!data) return;

  if (!document.querySelector('img')) {
    const imageElement = document.createElement('img');
    imageElement.alt = 'pokemon gif image';
    document.body.appendChild(imageElement);
  }

  const imgUrl = data.sprites.other.showdown.front_default;
  document.querySelector('img').src = imgUrl;
}

//create Get Pokemons! button
const addButton = () => {
  const buttonElement = document.createElement('button');
  buttonElement.textContent = 'Get Pokemons!';
  document.body.appendChild(buttonElement);
};

//start the application when the button is clicked
const startTheApp = async () => {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  await fetchAndPopulatePokemons(API_URL);

  document.querySelector('select').addEventListener('change', function () {
    fetchImage(this.value);
  });

  document.querySelector('button').removeEventListener('click', startTheApp);
};

function main() {
  addButton();
  document.querySelector('button').addEventListener('click', startTheApp);
}

window.addEventListener('load', main);
