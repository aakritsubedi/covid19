import api from "@/api"

const state = {
    globalChartData: [["Country", "Confirmed", "Deaths"]],
    theGlobal: {}
};

const getters = {
  theGlobal: state => state.theGlobal,
  globalChartData: state => state.globalChartData
};

const actions = {
  async getTheGlobalData({commit}){
    const res = await api.countryData()
    commit('globalData', res.Global);
    commit('globalChartData', res.Countries);
   
  }
};

const mutations = {
    globalData: (state, newData) => state.theGlobal = {
        recovered: { total: newData.TotalRecovered, new: newData.NewRecovered },
        confirmed: { total: newData.TotalConfirmed, new: newData.NewConfirmed },
        deaths: { total: newData.TotalDeaths, new: newData.NewDeaths }
      },
    globalChartData: (state, data) => {
        for (let info in data) {
            let individual = [];
            individual.push(
              data[info].Country,
              data[info].TotalConfirmed,
              data[info].TotalDeaths
            );
            state.globalChartData.push(individual);
          }
    }
};


export default {
  state,
  getters,
  actions,
  mutations
};