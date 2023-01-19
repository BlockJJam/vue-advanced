import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // #1) 초기 풀 스크립트 명명
  // render: function(createElement) {
  //   return createElement(App);
  // },

  // #2) createElement -> Vue에서 가장 많이 쓰는 Virtual DOM은 HyperScript의 줄임말로 "h"변경
  // render: function(h) {
  //   return h(App);
  // },

  // #3) 화살표 함수 적용
  // render: (h) => {
  //   return h(App);
  // },

  // #4) 인자 1개로 더 단축
  // render: h => h(App),
}).$mount('#app');
