import axios from "axios";
import { writeFileSync } from "fs";
import { dirname } from 'path';
import { fileURLToPath } from 'url';


const API_URL = "https://restcountries.com/v3.1/all";
const __dirname = dirname(fileURLToPath(import.meta.url));

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

    writeFileSync(
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
