import { fetchUserInfo, fetchAskInfo, fetchList } from '@/api/';

export default {
  // promise
  // FETCH_USERINFO({ commit }, name) {
  //   return fetchUserInfo(name)
  //     .then(({ data }) => commit('SET_USER', data))
  //     .catch((error) => console.log(error));
  // },
  //asnyc
  async FETCH_USERINFO({ commit }, name) {
    const response = await fetchUserInfo(name);
    commit('SET_USER', response.data);
    return response; // async함수의 리턴값은 무조건 promise가 리턴됨
  },
  async FETCH_ASKINFO({ commit }, id) {
    const response = await fetchAskInfo(id);
    commit('SET_ASKINFO', response.data);
    return response;
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  },
};
