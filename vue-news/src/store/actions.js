import { fetchUserInfo, fetchAskInfo, fetchList } from '@/api/';

export default {
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
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data))
      .catch((error) => console.log(error));
  },
};
