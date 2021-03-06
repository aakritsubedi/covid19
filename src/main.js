import Vue from 'vue'
import App from './App.vue'
import VueGoogleCharts from 'vue-google-charts'
import AxiosPlugin from 'vue-axios-cors';
import store from './stores';
import router from './router';

Vue.config.productionTip = false;
Vue.use(require('vue-moment'));
Vue.use(VueGoogleCharts)
Vue.use(AxiosPlugin)




new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
