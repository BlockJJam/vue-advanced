<template lang="">
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${askInfo.user}`">
            {{ askInfo.user }}
          </router-link>
          <div class="time">
            {{ askInfo.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ askInfo.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="askInfo.content"></div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      askInfo: 'fetchedAskInfo',
    }),
  },
  created() {
    const askInfo = this.$route.params.id;
    console.log(askInfo);
    this.$store.dispatch('FETCH_ASKINFO', askInfo);
  },
};
</script>
<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
