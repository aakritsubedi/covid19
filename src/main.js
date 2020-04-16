import Vue from 'vue'
import App from './App.vue'
import VueGoogleCharts from 'vue-google-charts'
import AxiosPlugin from 'vue-axios-cors';
 

Vue.config.productionTip = false;
Vue.use(require('vue-moment'));
Vue.use(VueGoogleCharts)
Vue.use(AxiosPlugin)




new Vue({
  render: h => h(App),
}).$mount('#app')
