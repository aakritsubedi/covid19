import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const geoUrl = "https://ipapi.co/json";
const covidNepal = 'https://corona.askbhunte.com/api/v1/'
const dataCovidData = 'https://data.askbhunte.com/api/v1/'

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
  // countryData: async () => {
  //   const url = "https://data.askbhunte.com/api/v1/covid/summary";
  //   const countries = await axios.get(url);

  //   return countries.data;
  // },
  // fetchHospital: async () => {
  //   const url = "http://localhost:9091/data/HospitalData";
  //   const hospitals = await axios.get(url);

  //   return hospitals.data;
  // },
  nepalData: async () => {
    const nepalInfo = await axios.get(covidNepal+'/data/nepal');

    return nepalInfo.data;
  },
  hospitalList: async () => {
    const hospitalInfo = await axios.get(covidNepal+'/hospitals');

    return hospitalInfo.data;
  },

  districtData: async () => {
    const districtData = await axios.get(dataCovidData+'/districts');
    const ids = districtData.data.map((data) => data.id)

    const eachDirstrictData = await Promise.all(ids.map(async (data) => {
      const info = await axios.get(dataCovidData+'/districts/'+data)
      return info.data
    }))

    return eachDirstrictData
},
  latestNews: async () => {
    const nepalNews = await axios.get(covidNepal+'news?limit=20000000');

    return nepalNews.data;
  },
  provinceData: async () => {
    const provinceData = await axios.get('https://data.nepalcorona.info/api/v1/covid/summary');
    
    return provinceData.data.province;  
  }
};
