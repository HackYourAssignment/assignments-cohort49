'use strict';

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function fetchAndPopulatePokemons(url) {
  const data = await fetchData(url);
  const select = document.querySelector('select');
  if (select.length > 0) return;

  data.results.forEach((element) => {
    const option = document.createElement('option');
    option.value = element.name;
    option.textContent = element.name;
    option.setAttribute('data-url', element.url);
    select.appendChild(option);
  });
}

async function fetchImage() {
  if (document.querySelector('img')) document.querySelector('img').remove();
  const img = document.createElement('img');
  document.body.appendChild(img);
  const select = document.querySelector('select');
  const url = select.options[select.selectedIndex].getAttribute('data-url');
  const elementData = await fetchData(url);
  img.src = elementData.sprites.front_default;
  img.alt = elementData.name;
}

function renderElements() {
  const button = document.createElement('button');
  const select = document.createElement('select');

  button.type = 'button';
  button.textContent = 'Get pokemon!';

  document.body.appendChild(button);
  document.body.appendChild(select);
}

function main() {
  renderElements();

  document.querySelector('button').addEventListener('click', () => {
    fetchAndPopulatePokemons('https://pokeapi.co/api/v2/pokemon?limit=151');
  });

  document.querySelector('select').addEventListener('change', fetchImage);
}

window.onload = () => {
  main();
};
