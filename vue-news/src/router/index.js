import VueRouter from 'vue-router';
import Vue from 'vue';
import NewsView from '@/views/NewsView.vue';
import JobsView from '@/views/JobsView.vue';
import AskView from '@/views/AskView.vue';
import ItemView from '@/views/ItemView.vue';
import UserView from '@/views/UserView.vue';
import createListView from '@/views/CreateListView.js';

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
    },
    {
      path: '/ask',
      name: 'ask',
      // component: createListView('AskView'),
      component: AskView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: createListView('JobsView'),
      component: JobsView,
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
