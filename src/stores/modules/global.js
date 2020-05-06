import api from "../../api"

const state = {
    chartData: [["Country", "Confirmed", "Deaths"]],
    global: {}
};

const getters = {
  global: state => state.global,
  chartData: state => state.chartData
};

const actions = {
  async getGlobalData({commit}){
    const res = await api.countryData()

    commit('globalData', res.countries.data.Global);
    commit('chartData', res.countries.data.Countries);
   
  }
};

const mutations = {
    globalData: (state, newData) => state.global = {
        recovered: { total: newData.TotalRecovered, new: newData.NewRecovered },
        confirmed: { total: newData.TotalConfirmed, new: newData.NewConfirmed },
        deaths: { total: newData.TotalDeaths, new: newData.NewDeaths }
      },
    chartData: (state, data) => {
        for (let info in data) {
            let individual = [];
            individual.push(
              data[info].Country,
              data[info].TotalConfirmed,
              data[info].TotalDeaths
            );
            state.chartData.push(individual);
          }
    }
};


export default {
  state,
  getters,
  actions,
  mutations
};