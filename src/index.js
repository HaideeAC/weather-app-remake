function searchCity(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=9453eocfb302f861c59f1e9f04d3bta4`;
  axios.get(apiUrl).then(function refreshWeather(response) {
    let currentTemp = document.querySelector("#current-temp");
    currentTemp.innerHTML = Math.round(response.data.temperature.current);
    let currentHumidity = document.querySelector("#humidity");
    currentHumidity.innerHTML = response.data.temperature.humidity;
    let currentWind = document.querySelector("#wind");
    currentWind.innerHTML = response.data.wind.speed;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    let description = document.querySelector("#descr");
    description.innerHTML = response.data.condition.description;
    let icon = document.querySelector("#mainIcon");
    icon.innerHTML = `<img
                  src="${response.data.condition.icon_url}"
                  alt=""
                  class="infobox2icon"
                />`;
  });
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let searchBox = document.querySelector("#input-box");

  searchCity(searchBox.value);
});

searchCity("London");

let now = new Date();

let date = document.querySelector("#date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes().toString().padStart(2, "0");

date.innerHTML = `${day} ${hour}:${minutes}`;

//forecast

function displayForecast() {
  let forecast = document.querySelector("#forecast");

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";
  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="forecast-daily">
  <div class="forecast-weekday">${day}</div>
  <div class="forecast-icon">☀️</div> 
  <div class="forecast-temperatures"
  <div class="higherTemp">
    29º 
    <span class="lowerTemp"> 19º</span></div>
  </div>
</div>`;
  });

  forecast.innerHTML = forecastHtml;
}

displayForecast();

// let hour1 = document.querySelector("#hourly1");
// let hours1 = hour + 3;
// hour1.innerHTML = `${hours1}:00`;

// let hour2 = document.querySelector("#hourly2");
// let hours2 = hour + 6;
// hour2.innerHTML = `${hours2}:00`;

// let hour3 = document.querySelector("#hourly3");
// let hours3 = hour + 9;
// hour3.innerHTML = `${hours3}:00`;

// let hour4 = document.querySelector("#hourly4");
// let hours4 = hour + 12;
// hour4.innerHTML = `${hours4}:00`;

// let hour5 = document.querySelector("#hourly5");
// let hours5 = hour + 15;
// hour5.innerHTML = `${hours5}:00`;
