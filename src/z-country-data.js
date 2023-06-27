import countryData from "./countryData.json";

const getCountries = () => {
  return countryData.map((country) => country.name);
};

const getCurrencyCodes = () => {
  const currencyCodes = new Set();

  countryData.forEach((country) => {
    if (country.currency) {
      currencyCodes.add(country.currency);
    }
  });
  return Array.from(currencyCodes);
};

const getCountryData = (countryName) => {
  const country = countryData.find((country) => country.name === countryName);
  if (country) {
    return country;
  }
  return null;
};

export default {
  getCountries,
  getCountryData,
  getCurrencyCodes,
};
