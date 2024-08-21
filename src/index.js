let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let searchBox = document.querySelector("#input-box");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchBox.value;
});
