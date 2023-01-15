<template>
  <div>
    <p v-for="item in fetchedJobs">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }}, by {{ item.domain }}</small>
    </p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedJobs']),
  },
  /**
   * created와 beforeMount(mounted는 제외))
   * - mount를 사용하여 data의 값을 핸들링하면, vue의 reactive 시스템 때문에 화면이 다시 그려짐
   * - created, befroeMount는 처음 그려질 때 함께 data의 값을 채움
   */
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>
<style lang=""></style>
