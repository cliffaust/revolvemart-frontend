<template>
  <div class="input-container">
    <label v-if="label" class="label">{{ label }}</label>
    <textarea
      cols="30"
      rows="10"
      v-bind="$attrs"
      class="textarea"
      :value="value"
      @input="updateValue"
    ></textarea>
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
      type: [String, Number],
      required: true,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  .label {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid #e2e1e1;
    font-family: inherit;
    border-radius: 5px;
    resize: none;

    &:focus {
      outline: none;
    }
  }
}
</style>
