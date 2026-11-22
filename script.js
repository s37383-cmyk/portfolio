const factButton = document.querySelector("#fact-button");
const bio = document.querySelector("#bio");

if (factButton && bio) {
  factButton.addEventListener("click", function () {
    bio.textContent = "Poza informatyką lubię aktywność na świeżym powietrzu.";
    factButton.textContent = "Gotowe!";
  });
}
