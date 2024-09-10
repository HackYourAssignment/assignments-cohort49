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
// Fetch data
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

function applyClickEffect(button) {
  button.style.transform = 'scale(0.98)';
  button.style.boxShadow = 'inset 0px 0px 10px rgba(0, 0, 0, 0.2)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
    button.style.boxShadow = '';
  }, 150);
}

// Fetch the Pokemon list into placeholder
async function fetchAndPopulatePokemons(
  pokemonSelect,
  fetchButton,
  pokemonImage
) {
  applyClickEffect(fetchButton);

  fetchButton.disabled = true;
  setTimeout(() => {
    fetchButton.disabled = false;
  }, 150);

  pokemonImage.style.display = 'none';
  pokemonImage.src = '';
  while (pokemonSelect.firstChild) {
    pokemonSelect.removeChild(pokemonSelect.firstChild);
  }

  // Fetch Pokemon list
  const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');

  if (data && data.results.length > 0) {
    data.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = pokemon.name;
      pokemonSelect.appendChild(option);
    });

    pokemonSelect.selectedIndex = 0;
  } else {
    const errorOption = document.createElement('option');
    errorOption.value = '';
    errorOption.textContent = 'No Pokemon data available';
    pokemonSelect.appendChild(errorOption);
  }
}

// Fetch and display the selected Pokemon's image
async function fetchImage(pokemonImage, url) {
  const pokemonData = await fetchData(url);

  if (pokemonData && pokemonData.sprites && pokemonData.sprites.front_default) {
    pokemonImage.src = pokemonData.sprites.front_default;
    pokemonImage.style.display = 'block';
    pokemonImage.alt = pokemonData.name;
  } else {
    pokemonImage.src = '';
    pokemonImage.alt = 'No image available';
    pokemonImage.style.display = 'none';
  }
}

function main() {
  const fetchButton = document.getElementById('fetch-pokemons-btn');
  const pokemonSelect = document.getElementById('pokemon-select');
  const pokemonImage = document.getElementById('pokemon-image');

  fetchButton.classList.add('fetch-btn');

  fetchButton.addEventListener('click', async () => {
    await fetchAndPopulatePokemons(pokemonSelect, fetchButton, pokemonImage);
    pokemonSelect.style.display = 'block';
  });

  //  Changing Pokemon selection to display image
  pokemonSelect.addEventListener('change', () => {
    const selectedPokemonUrl = pokemonSelect.value;
    if (selectedPokemonUrl) {
      fetchImage(pokemonImage, selectedPokemonUrl);
    }
  });
}

window.addEventListener('DOMContentLoaded', main);
