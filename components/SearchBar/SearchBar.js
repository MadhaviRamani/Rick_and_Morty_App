export function searchBar() {
  const formElement = document.createElement("form");
  formElement.setAttribute("data-js", "search-bar");
  formElement.classList.add("search-bar");

  const inputElement = document.createElement("input");
  inputElement.setAttribute("name", "query");
  inputElement.setAttribute("class", "search-bar__input");
  inputElement.setAttribute("type", "text");
  inputElement.setAttribute("placeholder", "Search characters");
  inputElement.setAttribute("aria-label", " characters name");

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("search-bar__button");
  buttonElement.setAttribute("aria-label", "search for character");

  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", "assets/magnifying-glass.png");
  imgElement.classList.add("search-bar__icon");

  

}
