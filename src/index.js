function searchCity(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=9453eocfb302f861c59f1e9f04d3bta4`;
  axios.get(apiUrl).then(function refreshWeather(response) {
    let currentTemp = document.querySelector("#current-temp");
    currentTemp.innerHTML = Math.round(response.data.temperature.current);
    let currentHumidity = document.querySelector("#humidity");
    currentHumidity.innerHTML = response.data.temperature.humidity;
    let currentWind = document.querySelector("#wind");
    currentWind.innerHTML = response.data.wind.speed;
  });
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let searchBox = document.querySelector("#input-box");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchBox.value;
  searchCity(searchBox.value);
});
