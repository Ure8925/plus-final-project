function displayWeatherInfo(response) {
  let weatherTemperature = document.querySelector("#weather-temperature");
  let temperature = response.data.temperature.current;
   let weatherCityElement = document.querySelector("#weather-city");
    let description = document.querySelector("#description");
    description.innerHTML=response.data.condition;
  
  

    weatherCityElement.innerHTML = response.data.city;
  weatherTemperature.innerHTML = Math.round(temperature);
}
function searchCity(city) {
  let apiKey = "302ea8odf48556tb65f5340850929f02";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherInfo);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Lagos");
