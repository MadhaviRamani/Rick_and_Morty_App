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
let searchQuery = "";
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

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value.toLowerCase();
  page = 1;
  cardContainer.innerHTML = "";
  fetchCharacters();
});

async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`,
    );
    const data = await response.json();

    cardContainer.innerHTML = "";

    maxPage = data.info.pages;
    pagination.textContent = `${page} / ${maxPage}`;

    data.results.forEach((character) => {
      const card = createCharacterCard(character);
      cardContainer.append(card);
    });
  } catch (error) {
    console.error("Error fetching characters:", error);
    cardContainer.innerHTML = "<p>No characters found.</p>";
  }
}
fetchCharacters();
