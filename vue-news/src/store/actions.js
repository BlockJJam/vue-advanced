import { fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchAskInfo } from '@/api/';

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => commit('SET_NEWS', data))
      .catch((err) => console.log(err));
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => commit('SET_JOBS', data))
      .catch((err) => console.log(err));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => commit('SET_ASK', data))
      .catch((err) => console.log(err));
  },
  FETCH_USERINFO({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => commit('SET_USER', data))
      .catch((error) => console.log(error));
  },
  FETCH_ASKINFO({ commit }, id) {
    fetchAskInfo(id)
      .then(({ data }) => commit('SET_ASKINFO', data))
      .catch((err) => console.log(err));
  },
};
