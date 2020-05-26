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
  async getNepalInfo({ commit, dispatch }) {
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
    dispatch('getDistrictInfo')
    commit('setNepalInfo', result);
  },

  async getDistrictInfo({ commit }) {
    let districtInfo = await api.districtData();

    const districtInfoMap = districtInfo.map(data => {
      if (data.covid_cases.length != 0) {
        const covidCasesData = data.covid_cases.map(data => {
          return {
            age: data.age,
            state: data.currentState,
            gender: data.gender
          }
        })

        const summary = getSummary(covidCasesData)
        return {
          title: data.title,
          title_ne: data.title_ne,
          covid_cases: data.covid_cases,
          summary: summary,
          province: data.province
        }

      }
      function getSummary(data) {
        const ages = data.map(info => info.age).filter(data => data != null)
        const state = data.map(info => info.state).filter(data => data != null)
        const gender = data.map(info => info.gender).filter(data => data != null)

        var min, max;
        if (ages.length == 0) {
          min = 0;
          max = 0;
        } else {
          min = Math.min(...ages)
          max = Math.max(...ages)
        }

        return {
        active :state.filter(data => data == "active").length,
        inactive : state.filter(data => data == "recovered").length,
        
        male : gender.filter(data => data == "male").length,
        female :gender.filter(data => data == "female").length,
        minAge: min,
        maxAge: max
        }

      }

      return {
        title: data.title,
        title_ne: data.title_ne,
        covid_cases: data.covid_cases,
        province: data.province
      }
    });

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
