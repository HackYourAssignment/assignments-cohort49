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
const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
const ABORT_TIMEOUT_MS = 1000;

async function fetchData(url) {
  // TODO complete this function
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function fetchAndPopulatePokemons() {
  // TODO complete this function
  try {
    const data = await fetchData(POKEMON_URL);
    const selectElement = document.createElement('select');
    selectElement.id = 'pokemon-select';

    const initialOption = document.createElement('option');
    initialOption.textContent = 'Get Pokemon';
    initialOption.disabled = true;
    initialOption.selected = true;
    selectElement.appendChild(initialOption);

    // loop over the pokemon results and create an option element

    data.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = pokemon.name;
      selectElement.appendChild(option);
    });

    document.body.appendChild(selectElement);
  } catch (error) {
    console.error(error);
  }
}

async function fetchImage(url) {
  // TODO complete this function
  try {
    const response = await fetchData(url);
    const imageUrl = response.sprites.front_default;

    let imgElement = document.querySelector('#pokemon-img');
    if (!imgElement) {
      imgElement = document.createElement('img');
      imgElement.id = 'pokemon-img';
      document.body.appendChild(imgElement);
    }

    imgElement.src = imageUrl;
  } catch (error) {
    console.error(error);
  }
}

function main() {
  // TODO complete this function
  fetchAndPopulatePokemons();

  document.body.addEventListener('change', async (event) => {
    if (event.target.id === 'pokemon-select') {
      const url = event.target.value;
      await fetchImage(url);
    }
  });
}

window.addEventListener('load', main);
