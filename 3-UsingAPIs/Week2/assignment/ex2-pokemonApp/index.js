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
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

async function fetchAndPopulatePokemons() {

  const selectElement = document.createElement('select');
  document.body.appendChild(selectElement);

  const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=150');
  
  if (data) {
    data.results.forEach(pokemon => {
      const option = document.createElement('option');
      option.value = pokemon.url;  // The URL to fetch individual Pokémon data
      option.textContent = pokemon.name;
      selectElement.appendChild(option);
    });
  }

  // Add event listener to load image when a Pokemon is selected
  selectElement.addEventListener('change', (event) => {
    fetchImage(event.target.value);  // Pass the selected Pokémon's URL
  });
}

async function fetchImage(pokemonUrl) {
  const data = await fetchData(pokemonUrl);

  if (data && data.sprites) {
    let imgElement = document.querySelector('img');
    if (!imgElement) {
      imgElement = document.createElement('img');
      document.body.appendChild(imgElement);
    }
    imgElement.src = data.sprites.front_default; // Display front image
    imgElement.alt = data.name; // Use Pokémon name as alt text
  }
}

function main() {
  window.addEventListener('DOMContentLoaded', () => {
    fetchAndPopulatePokemons();
  });
}

main();