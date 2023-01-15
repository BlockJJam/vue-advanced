<template>
  <div id="app">
    <ToolBar></ToolBar>
    <!-- <router-view></router-view>가 의미하는 것! -->
    <!-- - url이 만약 news-->
    <!-- - <NewsView></NewsView> <- 이런식으로 페이지가 렌더링 될 것!-->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from '@/components/Toolbar.vue';
export default {
  components: {
    ToolBar,
  },
};
</script>

<style>
.body {
  padding: 0;
  margin: 0;
}
</style>
