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
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

async function fetchAndPopulatePokemons() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'; // Fetch the first 151 Pokémon
  const data = await fetchData(url);
  const select = document.createElement('select');
  select.id = 'pokemon-select';

  data.results.forEach((pokemon) => {
    const option = document.createElement('option');
    option.value = pokemon.url;
    option.textContent = pokemon.name;
    select.appendChild(option);
  });

  select.addEventListener('change', (event) => fetchImage(event.target.value));

  document.body.appendChild(select);
}

async function fetchImage(url) {
  const data = await fetchData(url);
  const imageUrl = data.sprites.front_default;

  let img = document.querySelector('#pokemon-image');
  if (!img) {
    img = document.createElement('img');
    img.id = 'pokemon-image';
    document.body.appendChild(img);
  }
  img.src = imageUrl;
}

async function main() {
  try {
    await fetchAndPopulatePokemons();
  } catch (error) {
    console.error('Error in main function:', error);
  }
}

window.addEventListener('load', main);
