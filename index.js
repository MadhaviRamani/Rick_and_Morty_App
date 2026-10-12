/* <------------ createCharacterCard -------------> */
import { createCharacterCard } from "./charactercard.js";

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
let  page = 1;
const searchQuery = "";

async function fetchCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character = ${page}");
    const data = await response.json();

    maxPage = data.info.pages;
    cardContainer.innerHTML = "";
      data.results.forEach((character) => {
     const card = createCharacterCard(character);
     cardContainer.append(card);
    });

    pagination.textContent = `Page ${page} of ${maxPage} `;
   

   /*  console.log("Tüm API verisi:", data);

    // forEach döngüsü
    data.results.forEach((character) => {
      console.log(character.name);
      console.log(character.status);
      console.log(character.type);
      console.log(character.image);
    }); */

    // map işlemi
   /*  const names = data.results.map((character) => character.name);
    console.log("İsimler Dizisi:", names); */
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}

fetchCharacters();
