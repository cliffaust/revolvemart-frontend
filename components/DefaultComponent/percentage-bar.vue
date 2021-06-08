<template>
  <div class="bar">
    <div class="percent" :style="{ '--percent': percent + '%' }"></div>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
.bar {
  background-color: $dark-gray;
  width: 100%;
  height: 7px;
  border-radius: 100px;
  .percent {
    background-color: $primary-bgcolor-2;
    width: var(--percent);
    height: 7px;
    border-radius: 100px;
  }
}
</style>
