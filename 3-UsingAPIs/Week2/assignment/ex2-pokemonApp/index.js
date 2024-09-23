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

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function fetchAndPopulatePokemons() {
  try {
    const data = await fetchData(POKEMON_URL);

    const pokemonSelect = document.querySelector('#pokemon-select');
    pokemonSelect.textContent = '';

    const defaultOption = document.createElement('option');
    defaultOption.value = '';

    pokemonSelect.appendChild(defaultOption);

    data.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = pokemon.name;
      pokemonSelect.appendChild(option);
    });
  } catch (error) {
    console.error(error);
  }
}

async function fetchImage(url) {
  try {
    const data = await fetchData(url);

    const imageUrl = data.sprites.front_default;

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
  // create 'get pokemon' button
  const button = document.createElement('button');
  button.textContent = 'Get Pokemon';
  button.id = 'get-pokemon-button';
  document.body.appendChild(button);

  const pokemonSelect = document.createElement('select');
  pokemonSelect.id = 'pokemon-select';
  pokemonSelect.disabled = false;
  document.body.appendChild(pokemonSelect);

  button.addEventListener('click', fetchAndPopulatePokemons);

  pokemonSelect.addEventListener('change', (event) => {
    const url = event.target.value;
    fetchImage(url);
  });
}
// using async/await code here is not necessary, because no subsequent code depending on the completion of the promise.
// therefore, i can just call the main function directly.
window.addEventListener('load', main);
