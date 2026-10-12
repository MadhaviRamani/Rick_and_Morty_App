/* <------------ createCharacterCard -------------> */
import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

/* <------------ searchBarContainer -------------> */
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
const searchQuery = "";

async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`,
    );

    const data = await response.json();

    maxPage = data.info.pages;
    cardContainer.innerHTML = "";

    data.results.forEach((character) => {
      const card = createCharacterCard(character);
      cardContainer.append(card);
    });

    pagination.textContent = `${page} / ${maxPage} `;
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}

fetchCharacters();
/* <---------------- Pagination ----------------> */

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});
nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});
