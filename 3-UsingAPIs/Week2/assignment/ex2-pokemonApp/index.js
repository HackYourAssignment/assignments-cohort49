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
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

async function fetchAndPopulatePokemons(pokemonSelectElement) {
  if (!pokemonSelectElement) {
    console.error('No select element found');
    return;
  }

  const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
  if (data && data.results) {
    data.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent =
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      pokemonSelectElement.appendChild(option);
    });
  }
}

async function fetchImage(url, imageElement) {
  const data = await fetchData(url);
  if (data && data.sprites && data.sprites.front_default) {
    imageElement.src = data.sprites.front_default;
  }
}

function main() {
  const pokemonSelectElement = document.getElementById('pokemon-select');
  const pokemonImageElement = document.getElementById('pokemon-image');

  fetchAndPopulatePokemons(pokemonSelectElement);

  pokemonSelectElement.addEventListener('change', (event) => {
    const pokemonUrl = event.target.value;
    fetchImage(pokemonUrl, pokemonImageElement);
  });
}

window.addEventListener('load', main);
