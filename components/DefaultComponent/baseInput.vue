<template>
  <div class="input-container">
    <label v-if="label" class="label">{{ label }}</label>
    <div class="input-loading">
      <input
        v-bind="$attrs"
        :class="['input', { error: errorStyle }]"
        :value="value"
        @input="updateValue"
      />
      <div v-if="usernameLoading" class="spin-container-input">
        <div id="loader" class="spin"></div>
      </div>
    </div>
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
    errorStyle: {
      type: Boolean,
      default: false,
    },
    usernameLoading: {
      type: Boolean,
      default: false,
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
    font-weight: 600;
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

.error {
  border: 1px solid #e63946 !important;
}

.spin-container-input {
  position: absolute;
  right: 7px;
  top: 50%;
  transform: translateY(-50%);
}

.input-loading {
  position: relative;
}

.spin-container-input {
  text-align: center;
  margin-left: 1rem;
}
.spin {
  border: 3px solid $primary-bgcolor-1;
  width: 17px;
  height: 17px;
  margin: 0 auto;
  border-radius: 50%;
  border-left-color: transparent;
  border-right-color: transparent;
  animation: rotate 2s cubic-bezier(0.26, 1.36, 0.74, -0.29) infinite;
}
@keyframes rotate {
  0% {
    transform: rotateZ(-360deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
@keyframes rotate2 {
  0% {
    transform: rotateZ(360deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
</style>
