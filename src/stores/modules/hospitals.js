import api from "@/api";

const state = {
  hospitals: [],
};

const getters = {
  hospitals: (state) => state.hospitals,
};

const actions = {
  async getHospitals({ dispatch }) {
    const hospitals = await api.fetchHospital();
    dispatch('convertToJSON', hospitals)
  },
  convertToJSON({ commit },array) {
    var objArray = [];
    for (var i = 1; i < array.length; i++) {
      objArray[i - 1] = {};
      for (var k = 0; k < array[0].length && k < array[i].length; k++) {
        var key = array[0][k];
        objArray[i - 1][key] = array[i][k];
      }
    }
    
    commit("setHospitals", objArray);
  }
};

const mutations = {
  setHospitals: (state, hospitals) => (state.hospitals = hospitals),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
