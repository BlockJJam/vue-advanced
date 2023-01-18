<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>
<script>
import ListItem from '@/components/ListItem.vue';
// import bus from '@/utils/bus';
import ListMixin from '@/mixins/ListMixin';

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
<style lang=""></style>
