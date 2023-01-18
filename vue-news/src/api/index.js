import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0',
};

async function fetchUserInfo(userName) {
  try {
    const response = await axios.get(`${config.baseUrl}/user/${userName}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

function fetchAskInfo(id) {
  try {
    const response = axios.get(`${config.baseUrl}/item/${id}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

function fetchList(pageName) {
  try {
    const response = axios.get(`${config.baseUrl}/${pageName}/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export { fetchUserInfo, fetchAskInfo, fetchList };
