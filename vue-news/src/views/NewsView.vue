<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
import ListMixin from '@/mixins/ListMixin';
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
<style lang=""></style>
