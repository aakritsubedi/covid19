import api from "@/api";

const state = {
  nepalInfo: {}
};

const getters = {
  nepalInfo: (state) => state.nepalInfo,
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
    
    console.log(result);
    
    commit('setNepalInfo', result);
  }
};

const mutations = {
  setNepalInfo: (state, result) => (state.nepalInfo = result),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
