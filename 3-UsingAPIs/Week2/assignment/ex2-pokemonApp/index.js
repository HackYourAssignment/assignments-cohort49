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

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }
  return await response.json();
}

async function fetchAndPopulatePokemons(url) {
  const body = document.querySelector('body');
  const selectElement = document.createElement('select');
  selectElement.textContent = '';

  try {
    const { results } = await fetchData(url);
    results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.name;
      option.textContent = pokemon.name;
      selectElement.appendChild(option);
    });
    body.appendChild(selectElement);
  } catch (error) {
    body.textContent = '';
    const displayError = document.createElement('div');
    displayError.textContent = `Something went wrong.... ${error})`;
    body.appendChild(displayError);
  }
}

async function fetchImage(pokemonName) {
  let imgElement = document.querySelector('img');
  if (!imgElement) {
    imgElement = document.createElement('img');
    document.body.appendChild(imgElement);
  }

  try {
    const pokemonData = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const imgUrl = pokemonData.sprites.front_default;
    imgElement.src = imgUrl;
    imgElement.style.display = 'block';
  } catch (error) {
    document.body.textContent = '';
    const displayError = document.createElement('div');
    displayError.textContent = `Something went wrong.... ${error})`;
    document.body.appendChild(displayError);
  }
}

async function main() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  try {
    await fetchAndPopulatePokemons(url);
    const selectElement = document.querySelector('select');
    selectElement.addEventListener('change', (e) => {
      if (e.target.value) {
        fetchImage(e.target.value);
      } else {
        const imgElement = document.querySelector('img');
        if (imgElement) {
          imgElement.style.display = 'none';
        }
      }
    });
  } catch (error) {
    document.body.textContent = '';
    const displayError = document.createElement('div');
    displayError.textContent = `Something went wrong.... ${error})`;
    document.body.appendChild(displayError);
  }
}

window.onload = main;
