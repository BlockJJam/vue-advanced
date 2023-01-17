import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0',
};

function fetchUserInfo(userName) {
  return axios.get(`${config.baseUrl}/user/${userName}.json`);
}

function fetchAskInfo(id) {
  return axios.get(`${config.baseUrl}/item/${id}.json`);
}

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}/${pageName}/1.json`);
}

export { fetchUserInfo, fetchAskInfo, fetchList };
