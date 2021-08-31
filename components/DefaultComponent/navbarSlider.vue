<template>
  <div
    :class="[navbarSlider ? 'backdrop' : 'backdrop-not-active']"
    @click="changeNavbarSliderState"
  >
    <div
      :class="[
        navbarSlider ? 'slider-container' : 'slider-container-not-active',
      ]"
      @click.stop
    >
      <div class="links">
        <div class="link">
          <font-awesome-icon :icon="['fas', 'shopping-bag']" class="icon" />Buy
          a book
        </div>
        <div class="link">
          <font-awesome-icon :icon="['fas', 'book']" class="icon" />Sell your
          book
        </div>
        <div class="link">
          <font-awesome-icon :icon="['fas', 'user-graduate']" class="icon" />For
          student
        </div>
        <div class="link">
          <font-awesome-icon
            :icon="['fas', 'user-graduate']"
            class="icon"
          />Weekly special
        </div>
        <div class="link">
          <font-awesome-icon :icon="['fas', 'book']" class="icon" />Buy used
          books
        </div>
        <div class="link">
          <font-awesome-icon :icon="['fas', 'book']" class="icon" />Buy new
          books
        </div>
        <div class="link">
          <font-awesome-icon :icon="['fas', 'briefcase']" class="icon" />How we
          work
        </div>
        <div class="link">
          <font-awesome-icon
            :icon="['fas', 'address-card']"
            class="icon"
          />About us
        </div>
        <div class="link">
          <font-awesome-icon
            :icon="['fas', 'address-card']"
            class="icon"
          />Contact us
        </div>
        <div class="signup-login">
          <nuxt-link to="/signup" class="link signup"
            >Signup<font-awesome-icon :icon="['fas', 'user-plus']" class="icon"
          /></nuxt-link>
          <nuxt-link to="/login" class="link login"
            >Login<font-awesome-icon
              :icon="['fas', 'sign-in-alt']"
              class="icon"
          /></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  //   beforeRouteUpdate(to, from, next) {
  //     this.$store.dispatch('changeNavbarState')
  //     next()
  //   },
  data() {
    return {
      username: '',
    }
  },
  computed: {
    ...mapState({
      navbarSlider: (state) => state.navbarSlider,
    }),
  },

  watch: {
    $route: {
      handler: 'closeSlider',
      immediate: true,
      deep: true,
    },
  },

  methods: {
    changeNavbarSliderState() {
      if (this.navbarSlider === true) {
        this.$store.dispatch('changeNavbarState', false)
      } else {
        this.$store.dispatch('changeNavbarState', true)
      }
    },

    closeSlider() {
      this.$store.dispatch('changeNavbarState', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.slider-container {
  position: fixed;
  // left: 100;
  height: 100vh;
  width: 85%;
  background-color: #fff;
  z-index: 10;
  transform: translateX(0);
  overflow: scroll;
  transition: all 0.3s linear;
}

.slider-container .links,
.slider-container-not-active .links {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 6rem;

  .signup-login {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    &::before {
      content: '';
      position: absolute;
      top: -15px;
      height: 2px;
      width: 85%;
      background-color: #f4f4f4;
    }
  }

  .link {
    font-size: 1.6rem;
    text-decoration: none;
    padding: 1rem 0;
    font-weight: 700;
    color: inherit;
    position: relative;
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #f4f4f4;
    }

    // &::after {
    //   content: '';
    //   width: 100%;
    //   height: 3px;
    //   background-color: #fca21100;
    //   position: absolute;
    //   bottom: 0;
    //   left: 0;
    //   right: 0;
    // }

    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    // &::before {
    //   content: '';
    //   width: 0%;
    //   height: 3px;
    //   background-color: #fca311;
    //   position: absolute;
    //   bottom: 0;
    //   left: 0;
    //   right: 0;
    //   transition: 0.3s ease;
    // }

    // &:hover::before {
    //   width: 100%;
    // }
  }
}

.slider-container-not-active {
  position: fixed;
  // left: -100;
  height: 100vh;
  width: 85%;
  background-color: #fff;
  z-index: 10;
  transform: translateX(-100%);
  transition: all 0.3s linear;
}

.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.603);
  transition: z-index, background-color 0.3s ease;
}

.backdrop-not-active {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0);
  transition: z-index 0.8s ease;
}

.icon {
  margin-right: 1rem;
}

.signup,
.login {
  .icon {
    margin-left: 1rem;
    margin-right: 0;
  }
}
</style>
