<template>
  <div class="input-container">
    <label v-if="label" class="label">{{ label }}</label>
    <select class="input" :value="value" v-bind="$attrs" @input="updateValue">
      <option v-for="(option, index) in options" :key="index">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: '',
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
    margin-bottom: 0.6rem;
  }

  .input {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid #e2e1e1;
    font-family: inherit;
    border-radius: 5px;

    &:focus {
      outline: none;
    }
  }
}
</style>
