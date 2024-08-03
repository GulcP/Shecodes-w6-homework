function displayCurrentTemp(response) {
  let temperatureElement = document.querySelector("#current-temperature-value");
  let currentTemperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = currentTemperature;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value.trim().toLowerCase();

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=ca4bof60fdf24464tc7e37793a25dcc2&units=metric`;

  axios.get(apiUrl).then(displayCurrentTemp);
}

let searchForm = document.querySelector("#search-form");
console.log(searchForm);
searchForm.addEventListener("submit", search);

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let day = date.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formatDay = days[day];
  return `${formatDay} ${hours}:${minutes}`;
}
let currentDate = new Date();
let currentDateELement = document.querySelector(".current-date");
currentDateELement.innerHTML = formatDate(currentDate);
