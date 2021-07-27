<template>
  <div>
    <input id="nav-toggle" type="checkbox" class="navigation-checkbox" />
    <label for="nav-toggle" class="navigation-icon noSelect">
      <div class="burger noSelect"></div>
    </label>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navigation-icon {
  cursor: pointer;
  height: 1.8rem;
  width: 2rem;

  &:hover .burger::before {
    background-color: $primary-bgcolor-2;
  }
  &:hover .burger::after {
    background-color: $primary-bgcolor-2;
  }
  &:hover .burger {
    background-color: $primary-bgcolor-2;
  }
  .burger {
    position: relative;
    &,
    &::before,
    &::after {
      width: 2.1rem;
      height: 2px;
      display: inline-block;
      background-color: $primary-bgcolor-2;
      transition: 0.2s ease;
    }

    & {
      width: 1.6rem;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
    }

    &::before {
      top: -0.8rem;
    }

    &::after {
      top: 0.8rem;
    }
  }
}

.navigation-checkbox:checked + .navigation-icon .burger {
  background-color: transparent;
}

.navigation-checkbox:checked + .navigation-icon .burger::before {
  top: 0;
  transform: rotate(45deg);
}

.navigation-checkbox:checked + .navigation-icon .burger::after {
  top: 0;
  transform: rotate(-45deg);
}

.navigation-checkbox {
  display: none;
}
</style>
