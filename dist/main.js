/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\n//npx webpack --watch\r\n// /9aehKJfV8iN6Z33LiNOnKQSzuP0agzmw\r\n// https://api.weatherapi.com/v1/current.json?key=649a37719b594de3933185521241502&q=italy\r\n// <img src=\"${conditionIconUrl}\" alt=\"Icona condizioni meteo\">\r\n\r\nconst contentContainer = document.getElementById(\"content\");\r\nconst searchValue = document.getElementById(\"searchInput\");\r\nconst btnFind = document.querySelector(\".btn-find\");\r\n\r\nconst getJson = async function (searchTerm) {\r\n  const response = await fetch(\r\n    `https://api.weatherapi.com/v1/current.json?key=649a37719b594de3933185521241502&q=${searchTerm}&q=bulk`\r\n  );\r\n  const data = await response.json();\r\n  console.log(data);\r\n  return data;\r\n};\r\n\r\nbtnFind.addEventListener(\"click\", function () {\r\n  const searchTerm = searchValue.value;\r\n  getWeatherData(searchTerm);\r\n  getJson(searchTerm);\r\n});\r\n\r\nconst getWeatherData = async function (searchTerm) {\r\n  const res = await fetch(\r\n    `https://api.weatherapi.com/v1/current.json?key=649a37719b594de3933185521241502&q=${searchTerm}`\r\n  );\r\n  const data = await res.json();\r\n  // Estrai le informazioni necessarie dalla risposta dell'API\r\n  const temperature = data.current.temp_c;\r\n  const conditionText = data.current.condition.text;\r\n  //const conditionIconUrl = data.current.condition.icon;\r\n  const feelsLike = data.current.feelslike_c;\r\n  const countryName = data.location.country;\r\n\r\n  // dopo aver estratto le informazioni le mandiamo nel DOM\r\n\r\n  contentContainer.innerHTML = `\r\n    <h2>${searchTerm}, ${countryName}</h2>\r\n    <p>Temperature: ${temperature}°C</p>\r\n    <p>Feel Like: ${feelsLike}°C</p>\r\n    <p>Conditions: ${conditionText}</p>\r\n\r\n`;\r\n\r\n  return data;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;