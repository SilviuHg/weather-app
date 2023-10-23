import searchCity from "./weather";
import displayData from "./view";
import "./style.css";

const searchButton = document.querySelector(".search-btn");
const searchInput = document.getElementById("search");

searchButton.addEventListener("click", () => {
  const inputValue = searchInput.value;
  if (inputValue) {
    const request = searchCity(inputValue);
    request
      .then((value) => {
        displayData(value);
      })
      .catch((error) => {
        console.error(error);
        alert("City not found or other API error");
      });
  } else {
    alert("Please enter a valid location.");
  }
});
