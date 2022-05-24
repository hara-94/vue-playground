import Vue from 'vue';
import router from "./router/index";

import Home from './Home.vue';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Home),
}).$mount('#app')
