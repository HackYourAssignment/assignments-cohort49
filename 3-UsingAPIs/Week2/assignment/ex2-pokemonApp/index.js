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
  const response = await fetch(url);
  if (!response.ok) throw new Error(response.status);
  return response.json();
}

function renderPokemonCard() {
  const markup = `<div class="centered">
      <button type="button" class="get-button">Get Pokemon!</button>
      <select name="pokemons" id="pokemons" class="select-pokemon">
      </select>
    <img src="/" alt="" class="pokemon-img">
    </div>`;

  document.body.insertAdjacentHTML('afterbegin', markup);
}

function renderMenu(dataArray) {
  return dataArray
    .map(
      (pokemon, index) =>
        `<option value="${index + 1}">${pokemon.name}</option>`
    )
    .join('');
}

function fetchAndPopulatePokemons(data) {
  const getButton = document.querySelector('.get-button');
  const selectMenu = document.querySelector('#pokemons');

  const results = data.results;

  getButton.addEventListener('click', () => {
    selectMenu.insertAdjacentHTML('afterbegin', renderMenu(results));
  });

  selectMenu.addEventListener('change', async (evt) => {
    const selectedPokemonId = evt.currentTarget.value;
    const pokemonData = await fetchImage(selectedPokemonId);
    updateImg(pokemonData);
  });
}

async function fetchImage(pokemonId) {
  const pokemonData = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
  );

  if (!pokemonData.ok) throw new Error(pokemonData.status);
  return pokemonData.json();
}

function updateImg({ name, sprites }) {
  const img = document.querySelector('.pokemon-img');
  img.src = sprites.front_default;
  img.alt = name;
}

async function main() {
  renderPokemonCard();
  try {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
    fetchAndPopulatePokemons(data);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
