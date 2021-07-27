<template>
  <div>
    <div
      class="stars"
      :style="{ '--rating': rating, '--font-size': fontSize + 'px' }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    fontSize: {
      type: Number,
      default: 10,
    },
  },
}
</script>

<style lang="scss" scoped>
.stars {
  --percent: calc(var(--rating) / 5 * 100%);

  display: inline-block;
  font-size: var(--font-size);
  font-family: Times;
  line-height: 1;

  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(
      90deg,
      #fca311 var(--percent),
      #e4e4e4 var(--percent)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
