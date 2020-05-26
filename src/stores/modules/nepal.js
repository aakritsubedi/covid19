import api from "@/api";


const state = {
  nepalInfo: {},
  nepalHospital: [],
  districtData: []
};

const getters = {
  nepalInfo: (state) => state.nepalInfo,
  nepalHospital: (state) => state.nepalHospital,
  districtData: (state) => state.districtData

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

  async getDistrictInfo({ commit }) {
    let districtInfo = await api.districtData();
    const districtInfoMap = districtInfo.map(data => {

      return {
        title: data.title,
        title_ne: data.title_ne,
        covid_cases: data.covid_cases,
        province: data.province
      }
    });
    console.log(districtInfoMap)

    commit('setDistrictInfo', districtInfoMap);
  },

  async getNepalHospital({ commit }) {
    let nepalHospitalData = await api.hospitalList();

    commit('setNepalHospital', nepalHospitalData.data);
  }
};

const mutations = {
  setNepalInfo: (state, result) => (state.nepalInfo = result),
  setNepalHospital: (state, result) => (state.nepalHospital = result),
  setDistrictInfo: (state, result) => (state.districtData = result)
};

export default {
  state,
  getters,
  actions,
  mutations,
};
