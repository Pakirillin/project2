import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vtoroy from './vtoroy';
// import data from './data';
import { message, perviy } from './perviy';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// alert(message);
// alert(perviy.message);
vtoroy(message, perviy);
