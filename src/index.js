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

//next hours
let hour1 = document.querySelector("#hourly1");
let hours1 = now.setHours(now.getHours() + 3);
hour1.innerHTML = `${hours1}:00`;

let hour2 = document.querySelector("#hourly2");
let hours2 = now.setHours(now.getHours() + 6);
hour2.innerHTML = `${hours2}:00`;

let hour3 = document.querySelector("#hourly3");
let hours3 = now.setHours(now.getHours() + 9);
hour3.innerHTML = `${hours3}:00`;

let hour4 = document.querySelector("#hourly4");
let hours4 = now.setHours(now.getHours() + 12);
hour4.innerHTML = `${hours4}:00`;

let hour5 = document.querySelector("#hourly5");
let hours5 = now.setHours(now.getHours() + 15);
hour5.innerHTML = `${hours5}:00`;

//next days
let days1 = document.querySelector("#daily1")
let day1 = 