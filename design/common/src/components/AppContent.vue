<template>
  <div>
    <ul>
      <li v-for="item in items">
        {{ item }}
      </li>
    </ul>
    <button @click="$emit('renew')">renew items</button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  // 아래 문법이 -> 위에 button 태그에 @click="$emit('renew')" 옵션으로 대체
  // methods: {
  //   sendRenew() {
  //     this.$emit('renew');
  //   },
  // },
};
</script>
