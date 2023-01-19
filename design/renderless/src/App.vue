<template>
  <div>
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
      <!-- ... 하위 컴포넌트에서 DATA 렌더링 필드를 활용-->
      <div slot-scope="{ response, loading }">
        <div v-if="!loading">
          {{ response }}
        </div>

        <div v-if="loading">
          Loading...
        </div>
      </div>
    </fetch-data>
  </div>
</template>

<script>
import FetchData from './components/FetchData.vue';

export default {
  components: {
    FetchData,
  },
};
</script>
