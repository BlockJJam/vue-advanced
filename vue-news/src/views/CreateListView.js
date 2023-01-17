import ListView from '@/views/ListView.vue';
import bus from '@/utils/bus.js';

export default function createListView(name) {
  return {
    // 재사용할 컴포넌트(인스턴스) 옵션들이 들어갈 자리
    // name: NewsView와 같은 녀석들
    name,
    created() {
      bus.$emit('start:spinner');
      // 가상의 3초 스피너 시전!

      this.$store
        .dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
