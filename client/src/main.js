import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'

import StateAPIService from '@/services/stateService'

// config bootstrap
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// add API service to Vue prototype
Vue.prototype.$stateService = StateAPIService;

//Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
