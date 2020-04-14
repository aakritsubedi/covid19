import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export default {
  fetchAll: async () =>  {
    try {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
  
      return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
      return error;
    }
  },
  fetchByCountry: async (country) => {
    const countryUrl = `${url}/countries/${country}`;

    try {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(countryUrl);
  
      return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
      return error;
    }
  },
  fetchDaily: async () => {
    const dailyUrl = `${url}/daily`;

    try {
      const { data } = await axios.get(dailyUrl);
  
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
      return error;
    }
  },
  fetchCountries: async () => {
    const countriesUrl = `${url}/countries`;
    try {
      const { data: { countries } } = await axios.get(countriesUrl);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  }
}