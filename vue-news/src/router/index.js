import VueRouter from 'vue-router';
import Vue from 'vue';
import NewsView from '@/views/NewsView.vue';
import JobsView from '@/views/JobsView.vue';
import AskView from '@/views/AskView.vue';
import ItemView from '@/views/ItemView.vue';
import UserView from '@/views/UserView.vue';
// import createListView from '@/views/CreateListView';
import bus from '@/utils/bus';
import { store } from '@/store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      // path: url에 대한 주소(이름)
      // component: url 주소로 갔을 때 표시될 컴포넌트(페이지 느낌으로)
      path: '/news',
      name: 'news',
      // component: createListView('NewsView'),
      component: NewsView,
      beforeEnter: (to, from, next) => {
        // to: 이동할 url의 라우터 정보
        // from: 현재 URL의 라우터 정보
        // next: 해당 url로 보내주는 함수
        // if (to.matched === '') {
        //   next();
        // } else if (to.auth) {
        //   next();
        // } else {
        //   router.replace('/login');
        // }
        // next();

        bus.$emit('start:spinner');
        // 가상의 3초 스피너 시전!

        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched');
            // bus.$emit('end:spinner');
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: '/ask',
      name: 'ask',
      // component: createListView('AskView'),
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');

        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched');
            // bus.$emit('end:spinner');
            next();
          })
          .catch((err) => console.log(err));
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: createListView('JobsView'),
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');

        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched');
            // bus.$emit('end:spinner');
            next();
          })
          .catch((err) => console.log(err));
      },
    },
    {
      path: '/item',
      component: ItemView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ],
});
