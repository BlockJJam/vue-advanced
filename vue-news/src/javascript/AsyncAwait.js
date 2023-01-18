'use strict';
async function fetchData() {
  var list = await getUserList();
  console.log(list);
}

function getUserList() {
  return new Promise(function (resolve, reject) {
    const userList = ['user1', 'user2', 'user3'];
    resolve(userList);
  });
}

fetchData();
