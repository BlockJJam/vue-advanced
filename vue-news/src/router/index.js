import VueRouter from 'vue-router';
import Vue from 'vue';
import NewsView from '@/views/NewsView.vue';
import AskView from '@/views/AskView.vue';
import JobsView from '@/views/JobsView.vue';
import ItemView from '@/views/ItemView.vue';
import UserView from '@/views/UserView.vue';

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
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
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
