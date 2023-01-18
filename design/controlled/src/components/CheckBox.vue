<template>
  <input type="checkbox" :value="value" @click="$emit('input', !value)" />
  <!-- <input type="checkbox" :value="value" @click="toggleCheckBox" /> -->
</template>

<script>
export default {
  // @input 이벤트 - @input으로 올릴 때만 쓴다.
  // :value 값 -받을 때는 props로 내려서 value로 받고
  props: ['value'],
  // methods: {
  //   toggleCheckBox() {
  //     this.$emit('input', !this.value);
  //   },
  // },
};
</script>
