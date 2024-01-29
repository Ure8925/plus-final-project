function handleSearchSubmit(event) {
event.preventDefault()
let searchInput=document.querySelector("#search-input");
let weatherCityElement=document.querySelector("#weather-city");
weatherCityElement.innerHTML=searchInput.value;
}

let searchFormElement =document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);