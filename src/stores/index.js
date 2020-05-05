import Vuex from 'vuex';
import Vue from 'vue';
import country from './modules/country';
import global from './modules/global';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    country,
    global
  }
});