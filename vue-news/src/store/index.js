import Vuex from 'vuex';
import Vue from 'vue';
import mutations from '@/store/mutations.js';
import actions from '@/store/actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    userInfo: {},
    askInfo: {},
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedNews(state) {
      return state.news;
    },
    fetchedJobs(state) {
      return state.jobs;
    },
    fetchedUserInfo(state) {
      return state.userInfo;
    },
    fetchedAskInfo(state) {
      return state.askInfo;
    },
  },
  mutations,
  actions,
});
