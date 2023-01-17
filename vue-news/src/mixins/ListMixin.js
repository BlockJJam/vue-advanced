import bus from '@/utils/bus';

export default {
  // 재사용할 컴포넌트 옵션
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
};
