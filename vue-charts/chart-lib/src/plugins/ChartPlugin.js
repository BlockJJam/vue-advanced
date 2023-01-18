// 차트 컴포넌트 들에서 공통으로 사용할 코드를 주입하자
import Chart from 'chart.js';

export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart; // Chart를 모든 컴포넌트에서 this.$_Chart로 접근 가능하도록 Vue.prototype에 설정
    // console.log('chart plugin loaded');
  },
};
