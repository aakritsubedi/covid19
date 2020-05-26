import api from "@/api";

const state = {
  nepalInfo: {},
  nepalHospital: [],
  nepalNews: {},
  provinceInfo: {}
};

const getters = {
  nepalInfo: (state) => state.nepalInfo,
  nepalHospital: (state) => state.nepalHospital,
  nepalNews: (state) => state.nepalNews,
  provinceInfo: (state) => state.provinceInfo,
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
  },

  async getProvinceData({ commit }) {
    let provinceInfo = await api.provinceData();
    console.log(provinceInfo);
    let info = {
      1: { province: 1, total: 0, active: 0, recovered: 0, deaths: 0},
      2: { province: 2, total: 0, active: 0, recovered: 0, deaths: 0},
      3: { province: 3, total: 0, active: 0, recovered: 0, deaths: 0},
      4: { province: 4, total: 0, active: 0, recovered: 0, deaths: 0},
      5: { province: 5, total: 0, active: 0, recovered: 0, deaths: 0},
      6: { province: 6, total: 0, active: 0, recovered: 0, deaths: 0},
      7: { province: 7, total: 0, active: 0, recovered: 0, deaths: 0},
    }
    provinceInfo.cases.map(item => {
      info[item.province].total = item.count;
    });

    provinceInfo.active.map(item => {
      info[item.province].active = item.count;
    });

    provinceInfo.recovered.map(item => {
      info[item.province].recovered = item.count;
    });

    provinceInfo.deaths.map(item => {
      info[item.province].deaths = item.count;
    });

    commit('setProvinceData', info);
  }
};

const mutations = {
  setNepalInfo: (state, result) => (state.nepalInfo = result),
  setNepalHospital: (state, result) => (state.nepalHospital = result),
  setNepalNews: (state, result) => (state.nepalNews = result),
  setProvinceData: (state, result) => (state.provinceInfo = result)
};

export default {
  state,
  getters,
  actions,
  mutations,
};
