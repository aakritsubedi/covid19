import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const geoUrl = "https://ipapi.co/json";
const covidNepal = 'https://nepalcorona.info/api/v1'

export default {
  fetchAll: async () => {
    try {
      const {
        data: { confirmed, recovered, deaths, lastUpdate },
      } = await axios.get(url);

      return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
      return error;
    }
  },
  fetchByCountry: async (country) => {
    const countryUrl = `${url}/countries/${country}`;

    try {
      const {
        data: { confirmed, recovered, deaths, lastUpdate },
      } = await axios.get(countryUrl);

      return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
      return error;
    }
  },
  fetchDaily: async () => {
    const dailyUrl = `${url}/daily`;

    try {
      const { data } = await axios.get(dailyUrl);

      return data.map(({ confirmed, deaths, reportDate: date }) => ({
        confirmed: confirmed.total,
        deaths: deaths.total,
        date,
      }));
    } catch (error) {
      return error;
    }
  },
  fetchCountries: async () => {
    const countriesUrl = `${url}/countries`;
    try {
      const {
        data: { countries },
      } = await axios.get(countriesUrl);

      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  },
  getInfoFromIp: async () => {
    if (
      !("countryName" in localStorage) ||
      !("regionName" in localStorage) ||
      !("city" in localStorage)
    ) {
      const info = await axios
        .get(geoUrl, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          json: true,
        })
        .then((data) => data.data)
        .catch((error) => console.log(error));

      localStorage.setItem("countryName", info.country_name);
      localStorage.setItem("city", info.city);
      localStorage.setItem("regionName", info.region);
      localStorage.setItem("isp", info.ip + "-" + info.org);
    }

    return {
      countryName: localStorage.getItem("countryName"),
      city: localStorage.getItem("city"),
      regionName: localStorage.getItem("regionName"),
      isp: localStorage.getItem("isp"),
    };
  },
  countryData: async () => {
    const url = "https://api.covid19api.com/summary";
    let countries = await axios.get(url);

    return countries.data;
  },
  // fetchHospital: async () => {
  //   const url = "http://localhost:9091/data/HospitalData";
  //   let hospitals = await axios.get(url);

  //   return hospitals.data;
  // },
  nepalData: async () => {
    let nepalInfo = await axios.get(covidNepal+'/data/nepal');

    return nepalInfo.data;
  },
  hospitalList: async () => {
    let hospitalInfo = await axios.get(covidNepal+'/hospitals');

    return hospitalInfo.data;
  }
};
