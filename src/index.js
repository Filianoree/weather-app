"use strict";
//npx webpack --watch
// /9aehKJfV8iN6Z33LiNOnKQSzuP0agzmw
// https://api.weatherapi.com/v1/current.json?key=649a37719b594de3933185521241502&q=italy
// <img src="${conditionIconUrl}" alt="Icona condizioni meteo">

const contentContainer = document.getElementById("content");
const searchValue = document.getElementById("searchInput");
const btnFind = document.querySelector(".btn-find");

const getJson = async function (searchTerm) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=649a37719b594de3933185521241502&q=${searchTerm}&q=bulk`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

btnFind.addEventListener("click", function () {
  const searchTerm = searchValue.value;
  getWeatherData(searchTerm);
  getJson(searchTerm);
});

const getWeatherData = async function (searchTerm) {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=649a37719b594de3933185521241502&q=${searchTerm}`
  );
  const data = await res.json();
  // Estrai le informazioni necessarie dalla risposta dell'API
  const temperature = data.current.temp_c;
  const conditionText = data.current.condition.text;
  //const conditionIconUrl = data.current.condition.icon;
  const feelsLike = data.current.feelslike_c;
  const countryName = data.location.country;

  // dopo aver estratto le informazioni le mandiamo nel DOM

  contentContainer.innerHTML = `
    <h2>${searchTerm}, ${countryName}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Feel Like: ${feelsLike}°C</p>
    <p>Conditions: ${conditionText}</p>

`;

  return data;
};
