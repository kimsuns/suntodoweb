const API_KEY = "a09c3edb6bfb525d08718ad5daa08ea0";

const TEMP_C = 273.15;

let weatherValue = null;

function onGeoOk(event) {
  const lat = event.coords.latitude;
  const lon = event.coords.longitude;

  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#city");
      const temp = document.querySelector("#temp");
      const weather = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      temp.innerText = `${(data.main.temp - TEMP_C).toFixed(2)}˚C`;
      weather.innerText = data.weather[0].main;
      // weatherValue = weather.innerText = data.weather[0].main;
      // console.log(data);
      // getWeatherValue(weatherValue);
    });
}

function onGeoError() {
  alert("We don't know where you are");
}

// export function getWeatherValue() {
//   return weatherValue;
// }

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
