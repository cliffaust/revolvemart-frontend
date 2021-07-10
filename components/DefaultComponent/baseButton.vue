<template>
  <button :class="buttonClass" class="noSelect" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    buttonClass: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.btn-primary {
  padding: 1.2rem 1rem;
  background-color: $primary-bgcolor-1;
  font-weight: 600;
  width: 100%;
  border-radius: 1rem;
  text-transform: uppercase;
  font-size: 1.4rem;
  color: #ffff;
  cursor: pointer;
  border: 2px solid $primary-bgcolor-1;

  &:focus {
    outline: none;
  }
}

.btn-open {
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  background-color: transparent;
  border: 2px solid $primary-bgcolor-2;
  color: $primary-text-color;
  text-transform: uppercase;
  transition: 0.5s ease;
  font-weight: 600;
  font-size: 1.4rem;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: $primary-bgcolor-2;
  }

  &:focus {
    outline: none;
  }
}

.btn-close {
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  background-color: $primary-bgcolor-2;
  border: 2px solid $primary-bgcolor-2;
  color: $primary-text-color;
  text-transform: uppercase;
  transition: 0.5s ease;
  font-weight: 600;
  font-size: 1.4rem;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: transparent;
  }

  &:focus {
    outline: none;
  }
}

.btn-rounded {
  border-radius: 50px;
}

.backgroud-open-btn {
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  background-color: transparent;
  border: 2px solid $primary-bgcolor-2;
  color: $primary-text-color;
  text-transform: uppercase;
  transition: 0.5s ease;
  font-weight: 600;
  font-size: 1.4rem;
  cursor: pointer;
  width: 100%;

  &:focus {
    outline: none;
  }
}

.btn-secondary {
  padding: 1.2rem 1rem;
  background-color: $primary-bgcolor-2;
  border: 2px solid $primary-bgcolor-2;
  color: $primary-text-color;
  border-radius: 1rem;
  text-transform: uppercase;
  transition: 0.5s ease;
  font-weight: 600;
  font-size: 1.4rem;
  cursor: pointer;
  width: 100%;

  &:focus {
    outline: none;
  }
}
</style>
