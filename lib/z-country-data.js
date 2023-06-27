"use strict";var countryData=require("./countryData.json");var getCountries=function getCountries(){return countryData.map(function(country){return country.name})};var getCurrencyCodes=function getCurrencyCodes(){var currencyCodes=new Set;countryData.forEach(function(country){if(country.currency){currencyCodes.add(country.currency)}});return Array.from(currencyCodes)};var getCountryData=function getCountryData(countryName){var country=countryData.find(function(country){return country.name===countryName});if(country){return country}return null};module.exports={getCountries:getCountries,getCountryData:getCountryData,getCurrencyCodes:getCurrencyCodes};