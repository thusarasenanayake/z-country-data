const axios = require("axios");
const fs = require("fs");
const API_URL = "https://restcountries.com/v3.1/all";

const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);

    const formattedData = [];

    for (const country of response.data) {
      const name = country.name.common;
      const flag = country.flag;
      let currency;

      if (country.currencies) {
        currency = Object.keys(country.currencies)[0];
      }

      const countryData = {
        name,
        flag,
        currency: currency || "",
      };

      formattedData.push(countryData);
    }
    const jsonData = JSON.stringify(formattedData);

    fs.writeFileSync(
      `${__dirname}/../src/countryData.json`,
      jsonData,
      "utf8",
      () => console.log("Country data fetched successfully!")
    );
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

fetchData();
