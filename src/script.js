function displayWeatherInfo(response) {
   let weatherTemperature = document.querySelector("#weather-temperature");
    let temperature = response.data.temperature.current;
    let weatherCityElement = document.querySelector("#weather-city");
     let descriptionElement = document.querySelector("#description");
     let humidity = document.querySelector("#humidity");
     let windElement =document.querySelector("#wind");
     let currentTime = document.querySelector("#current-time");
     let date = new Date(response.data.time * 1000)
     let iconElement = document.querySelector("#icon")

  
    currentTime.innerHTML = realTimeDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidity.innerHTML = `${response.data.temperature.humidity}%`;
    windElement.innerHTML= `${response.data.wind.speed}km/h`;
    weatherCityElement.innerHTML = response.data.city;
  weatherTemperature.innerHTML = Math.round(temperature);
   iconElement.innerHTML = `<img src ="${response.data.condition.icon_url}" class="weather-icon" />`;

   getWeatherForecast(response.data.city);
}
  
function searchCity(city) {
  let apiKey = "302ea8odf48556tb65f5340850929f02";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherInfo);
}

function realTimeDate(date){
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 let day = days[date.getDay()];

if (minutes < 10) {
  minutes = `0${minutes}`
}
 return `${day} ${hours}:${minutes}`
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  return days[date.getDay()];
}

function getWeatherForecast(city){
  let apiKey= "302ea8odf48556tb65f5340850929f02";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);
  
}

function showForecast(response) {
  console.log(response.data);

  let forecastHtml = "";

  response.data.daily.forEach(function(days, index) {
    if(index < 5){
  forecastHtml =
    forecastHtml +
    `<div>
    <span class="weather-forecast-day">${formatDay(days.time)}</span>
    <img src = "${days.condition.icon_url}" class ="weather-forecast-icon" />
    <div class="weather-forecast-info"> <span class="weather-forecast-min">${Math.round(
      days.temperature.maximum
    )}°</span>
     <span class="weather-forecast-max">${Math.round(
       days.temperature.minimum
     )}°</span> 
     </div>
     </div>
    </div>
    `;
     }
  });

  let dailyForecast = document.querySelector("#weather-forecast");
  dailyForecast.innerHTML = forecastHtml;
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Lagos");




   
    
