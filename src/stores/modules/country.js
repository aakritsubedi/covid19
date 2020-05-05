// import axios from 'axios';
import api from "@/api";

const state = {
  global: {},
  lastUpdate: "",
  selectedCountry: "Global",
  countries: [],
  myCountry: {},
  chartData: null
};

const getters = {
  global: (state) => state.global,
  lastUpdate: (state) => state.lastUpdate,
  selectedCountry: (state) => state.selectedCountry,
  countries: (state) => state.countries,
  myCountry: (state) => state.myCountry,
  chartData: (state) => state.chartData
};

const actions = {
  async init({ dispatch }){
    await dispatch('created')
    await dispatch('updateData')
  },
  async created({ commit }) {
    const myCountry = await api.getInfoFromIp();
    const selectedCountry = myCountry.countryName;
    const countries = await api.fetchCountries();
    countries.unshift('Global')

    commit("setSelectedCountry", selectedCountry);
    commit("setMyCountry", myCountry);
    commit("setCountries", countries);
  },
  async updateData({ commit, state, dispatch }) {
    let global = await api.fetchByCountry(state.selectedCountry);

    global["confirmed"]["subtitle"] = "Number of active cases";
    global["recovered"]["subtitle"] = "Number of recoveries";
    global["deaths"]["subtitle"] = "Number of deaths caused";

    commit("setLastUpdatedDate", global["lastUpdate"]);   
    commit("setGlobal", global);
    dispatch('makeChartData');
  },
  async makeChartData({ commit, state }) {
    delete state.global["lastUpdate"];
    const valueForChart = ["Corona"];
    valueForChart.push(state.global["deaths"].value);
    valueForChart.push(state.global["recovered"].value);
    valueForChart.push(state.global["confirmed"].value);

    commit('setChartData' , valueForChart)
  },
  getDataFor({state,dispatch}) {
    if (state.selectedCountry === 'Global') {
      dispatch('getGlobalData')
    } else {
      dispatch('updateData')
    }
  },
  async getGlobalData({ dispatch, commit }) {
    let global = await api.fetchAll();
    console.log(global);
    
    global["confirmed"]["subtitle"] = "Number of active cases";
    global["recovered"]["subtitle"] = "Number of recoveries";
    global["deaths"]["subtitle"] = "Number of deaths caused";


    
    commit('setLastUpdatedDate', global.lastUpdate);
    commit("setGlobal", global);
    dispatch('makeChartData');
  },
};

const mutations = {
  setMyCountry: (state, myCountry) => (state.myCountry = myCountry),
  setSelectedCountry: (state, selectedCountry) => (state.selectedCountry = selectedCountry),
  setCountries: (state, countries) => (state.countries = countries),
  setGlobal: (state, global) => (state.global = global),
  setChartData: (state, value) => {
    state.chartData = [['Corona Report', 'Deaths', 'Recovered', 'Confirmed']]
    state.chartData.push(value)
  },
  setLastUpdatedDate: (state, value) => (state.lastUpdate = value)
};

export default {
  state,
  getters,
  actions,
  mutations,
};
