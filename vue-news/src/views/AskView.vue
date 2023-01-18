<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>
<script>
import ListMixin from '@/mixins/ListMixin';
import ListItem from '@/components/ListItem.vue';
// import bus from '@/utils/bus';

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // mounted() {
  //   bus.$emit('end:spinner');
  // },
};
</script>

<style></style>
