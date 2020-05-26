import api from "@/api";

const state = {
  nepalInfo: {},
  nepalHospital: [],
  nepalNews: {}
};

const getters = {
  nepalInfo: (state) => state.nepalInfo,
  nepalHospital: (state) => state.nepalHospital,
  nepalNews: (state) => state.nepalNews,
};

const actions = {
  async getNepalInfo({ commit }) {
    let nepalData = await api.nepalData();
    
    let result = {
      "Tested Positive": nepalData.tested_positive,
      "Tested Negative": nepalData.tested_negative,
      "Tested Total": nepalData.tested_total,
      "In Isolation": nepalData.in_isolation,
      "Quarantine": nepalData.quarantined,
      "Tested RDT": nepalData.tested_rdt,
      "Pending Result": nepalData.pending_result,
      "Recovered": nepalData.recovered,
      "Deaths": nepalData.deaths,
    }

    commit('setNepalInfo', result);
  },

  async getNepalHospital({ commit }) {
    let nepalHospitalData = await api.hospitalList();
    
    commit('setNepalHospital', nepalHospitalData.data);
  },

  async getNepalNews({ commit }) {
    let latestNews = await api.latestNews();
    
    commit('setNepalNews', latestNews.data.slice(0, 9));
  }
};

const mutations = {
  setNepalInfo: (state, result) => (state.nepalInfo = result),
  setNepalHospital: (state, result) => (state.nepalHospital = result),
  setNepalNews: (state, result) => (state.nepalNews = result),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
