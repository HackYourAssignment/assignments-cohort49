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
    if(!response.ok) {
      throw new Error('HTTP error! status: ${response.status}');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetching data failed:', error);
  }
}

async function fetchAndPopulatePokemons() {
  try{
    
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
    const data = await fetchData(url);

    const pokemonData = document.createElement('select');
    pokemonData.id ='pokemon-select';
    document.body.appendChild(pokemonData);

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select a Pokemon';
    pokemonData.appendChild(defaultOption);

    data.results.forEach(pokemon => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = pokemon.name;
      pokemonData.appendChild(option);
    });
  }catch(error) {
    console.error('Error populating Pokemon select:', error);
  }
}

async function fetchImage(url) {
  try {
    const data = await fetchData(url);
    const imageUrl = data.sprites.front_default;

    let image = document.querySelector('#pokemon-image');
    
      image = document.createElement('img');
      image.id = 'pokemon-image';
      image.alt = 'Selected Pokemon';
      document.body.appendChild(image);
      image.src = imageUrl;
 } catch(error) {
    console.error('Error fetching image:', error);
  }
}

async function main() {
    await fetchAndPopulatePokemons();

    const selectElement = document.querySelector('#pokemon-select');
    selectElement.addEventListener('change', (event) => {
      const pokemonUrl = event.target.value;
      fetchImage(pokemonUrl);
    })
  }

window.addEventListener('load', main);
