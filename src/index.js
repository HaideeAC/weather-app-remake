function searchCity(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=9453eocfb302f861c59f1e9f04d3bta4&units=metric`;
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
    getForecast(response.data.city);
  });
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let searchBox = document.querySelector("#input-box");

  searchCity(searchBox.value);
});

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
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}

function getForecast(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=9453eocfb302f861c59f1e9f04d3bta4&units=metric`;
  axios.get(apiUrl).then(function displayForecast(response) {
    console.log(response.data.daily);

    let forecast = document.querySelector("#forecast");

    let forecastHtml = "";
    response.data.daily.forEach(function (day, index) {
      if (index > 0 && index < 6) {
        forecastHtml =
          forecastHtml +
          `<div class="forecast-daily">
    <div class="forecast-weekday">${formatDay(day.time)}</div>
    <div ><img src="${day.condition.icon_url}" class="forecast-icon" /></div> 
    <div class="forecast-temperatures"
    <div class="higherTemp">
    ${Math.round(day.temperature.maximum)}º 
    <span class="lowerTemp">${Math.round(day.temperature.minimum)}º</span></div>
    </div>
    </div>`;
      }
    });

    forecast.innerHTML = forecastHtml;
  });
}

searchCity("London");
