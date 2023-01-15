/**
 * main.js에서는 프로젝트 구조나 설정들이 한눈에 보이면 좋다.
 */
import Vue from 'vue';
import App from '@/App.vue';
import { router } from '@/router/index.js';
import { store } from '@/store';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
