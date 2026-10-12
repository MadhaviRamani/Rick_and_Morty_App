<<<<<<< HEAD
import { createCharacterCard } from "./charactercard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
=======
/* <------------ createCharacterCard -------------> */
import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

/* <------------ searchBarContainer -------------> */
>>>>>>> main
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

<<<<<<< HEAD
let maxPage = 1;
let page = 1;
let searchQuery = "";
=======
// States
let maxPage = 1;
let page = 1;
const searchQuery = "";
>>>>>>> main

async function fetchCharacters() {
  try {
    const response = await fetch(
<<<<<<< HEAD
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`,
    );
    const data = await response.json();

    cardContainer.innerHTML = "";

    maxPage = data.info.pages;
    pagination.textContent = `${page} / ${maxPage}`;

=======
      `https://rickandmortyapi.com/api/character/?page=${page}`,
    );

    const data = await response.json();

    maxPage = data.info.pages;
    cardContainer.innerHTML = "";

>>>>>>> main
    data.results.forEach((character) => {
      const card = createCharacterCard(character);
      cardContainer.append(card);
    });
<<<<<<< HEAD
=======

    pagination.textContent = `${page} / ${maxPage} `;
>>>>>>> main
  } catch (error) {
    console.error("Error fetching characters:", error);
    cardContainer.innerHTML = "<p>No characters found.</p>";
  }
}

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  searchQuery = data.query;
  page = 1;

  fetchCharacters();
});

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
