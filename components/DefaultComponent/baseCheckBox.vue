<template>
  <div class="input-container">
    <input
      id="others"
      v-bind="$attrs"
      class="input"
      type="checkbox"
      :value="value"
      @change="change"
    />
    <label v-if="label" for="others" class="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String],
      required: true,
    },
  },
  methods: {
    change(e) {
      this.$emit('input', e.target.checked ? 'true' : 'false')
    },
  },
}
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  .label {
    font-size: 1.5rem;
    margin-left: 0.8rem;
  }
}
</style>
