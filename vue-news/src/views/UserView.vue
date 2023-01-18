<template lang="">
  <div>
    <UserProfile>
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ 'Joined ' + userInfo.created }}, </span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </UserProfile>
  </div>
</template>
<script>
import UserProfile from '@/components/UserProfile.vue';
import { mapGetters } from 'vuex';

/**''
 * UserView -> UserProfile 데이터를 넘기는 방법
 * 1) this.$state.state.xxx > props 활용
 * 2) store의 state를 이용하여, component에서 호출
 */

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters({
      userInfo: 'fetchedUserInfo',
    }),
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USERINFO', userName);
  },
};
</script>
<style lang=""></style>
