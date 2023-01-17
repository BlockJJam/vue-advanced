<template lang="">
  <div>
    <section>
      <!-- 사용자 정보 -->
      <UserProfile>
        <router-link slot="username" :to="`/user/${askInfo.user}`">
          {{ askInfo.user }}
        </router-link>
        <template slot="time">{{ 'Posted ' + askInfo.time_ago }}</template>
      </UserProfile>
    </section>
    <section>
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
import UserProfile from '@/components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters({
      askInfo: 'fetchedAskInfo',
    }),
  },
  created() {
    const askInfo = this.$route.params.id;
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
