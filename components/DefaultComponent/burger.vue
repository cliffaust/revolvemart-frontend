<template>
  <div class="burger-box">
    <input
      id="nav-toggle"
      v-model="navbarSlider"
      type="checkbox"
      class="navigation-checkbox"
    />
    <label for="nav-toggle" class="navigation-icon noSelect">
      <div class="burger noSelect"></div>
    </label>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      navbarSlider: (state) => state.navbarSlider,
    }),
    navbarSlider: {
      get() {
        return this.$store.state.navbarSlider
      },
      set() {
        if (this.navbarSlider === false) {
          return this.$store.commit('CHANGE_NAVBAR_SLIDER', true)
        } else {
          return this.$store.commit('CHANGE_NAVBAR_SLIDER', false)
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.burger-box {
  z-index: 12;
}
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
