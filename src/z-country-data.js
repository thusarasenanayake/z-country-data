import countryData from "./countryData.json";

export const getCountries = () => {
  return countryData.map((country) => country.name);
};

export const getCurrencyCodes = () => {
  const currencyCodes = new Set();

  countryData.forEach((country) => {
    if (country.currency) {
      currencyCodes.add(country.currency);
    }
  });
  return Array.from(currencyCodes);
};

export const getCountryData = (countryName) => {
  const country = countryData.find((country) => country.name === countryName);
  if (country) {
    return country;
  }
  return null;
};


