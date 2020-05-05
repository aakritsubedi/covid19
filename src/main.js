import Vue from 'vue'
import App from './App.vue'
import VueGoogleCharts from 'vue-google-charts'
import AxiosPlugin from 'vue-axios-cors';
import store from './stores';

Vue.config.productionTip = false;
Vue.use(require('vue-moment'));
Vue.use(VueGoogleCharts)
Vue.use(AxiosPlugin)




new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
