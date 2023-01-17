import Vuex from 'vuex';
import Vue from 'vue';
import mutations from '@/store/mutations.js';
import actions from '@/store/actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userInfo: {},
    askInfo: {},
    list: [],
  },
  getters: {
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
