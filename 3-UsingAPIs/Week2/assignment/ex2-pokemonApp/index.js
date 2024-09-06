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
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Network Error: ${error.message}`);
    throw error; // rethrow the error to be caught by the caller
  }
}

async function fetchAndPopulatePokemons() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const selectElement = document.querySelector('#pokemon-select');

  try {
    const data = await fetchData(url);
    const pokemons = data.results; // get the array of pokemons from api response
    pokemons.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = pokemon.name;

      selectElement.appendChild(option);
    });
  } catch (error) {
    console.error('Error populating pokemon list:', error);
  }
}

async function fetchImage(pokemonUrl) {
  const imageElement = document.querySelector('#pokemon-image');

  try {
    const pokemonData = await fetchData(pokemonUrl);
    const imageUrl = pokemonData.sprites.front_default; // get pokemon front image url
    imageElement.src = imageUrl;
    imageElement.alt = pokemonData.name;
  } catch (error) {
    console.error('Error fetching pokemon image:', error);
  }
}

async function main() {
  await fetchAndPopulatePokemons();

  const selectElements = document.querySelector('#pokemon-select');
  selectElements.addEventListener('change', (event) => {
    const pokemonUrl = event.target.value;
    fetchImage(pokemonUrl);
  });
}
window.addEventListener('load', main);
