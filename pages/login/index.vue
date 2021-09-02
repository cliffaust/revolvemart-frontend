<template>
  <div class="login-main-container">
    <navbar></navbar>
    <div v-if="loginError" class="login-server-error">
      We couldn’t find an account matching the email or password you entered.
      Please check your email or password and try again.
    </div>
    <div class="login-container">
      <div class="header-text">Login</div>
      <ValidationObserver v-slot="{ handleSubmit }">
        <ValidationProvider
          v-slot="{ errors }"
          name="Email"
          mode="eager"
          rules="required"
        >
          <div class="email">
            <baseInput
              v-model="data.email"
              placeholder="Email"
              type="email"
              :error-style="Boolean(errors[0])"
              label="Email"
            ></baseInput>
            <span id="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="Password"
          mode="eager"
          rules="required"
        >
          <div class="password">
            <baseInput
              v-model="data.password"
              placeholder="Password"
              :error-style="Boolean(errors[0])"
              label="Password"
              type="password"
            ></baseInput>
            <span id="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <div v-if="$route.query.redirect" class="register-text">
          <span class="text">Don't have an account? </span
          ><nuxt-link
            :to="{
              path: '/signup',
              query: { redirect: `${$route.query.redirect}` },
            }"
            class="link"
            >Register</nuxt-link
          >
        </div>
        <div v-else class="register-text">
          <span class="text">Don't have an account? </span
          ><nuxt-link to="/signup" class="link">Register</nuxt-link>
        </div>
        <div class="login-btn">
          <baseButton button-class="btn-secondary" @click="handleSubmit(login)"
            ><div class="loading-content">
              <div class="btn-login-text">Login</div>
              <div v-if="loading" class="spin-container">
                <div id="loader" class="spin"></div>
              </div></div
          ></baseButton>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import navbar from '~/components/DefaultComponent/navbar.vue'
import baseInput from '~/components/DefaultComponent/baseInput'
import baseButton from '~/components/DefaultComponent/baseButton'
export default {
  components: {
    navbar,
    baseInput,
    baseButton,
  },
  data() {
    return {
      data: {
        email: '',
        password: '',
      },
      redirectQuery: this.$route.query.redirect || '/',
    }
  },
  computed: {
    ...mapState({
      loading: (state) => state.signin.loading,
    }),
    ...mapState({
      loginError: (state) => state.signin.loginError,
    }),
  },
  methods: {
    login() {
      this.$store.commit('signin/LOADING_STATE')
      this.$store.dispatch('signin/login', {
        data: this.data,
        redirect: this.redirectQuery,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.header-text {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.login-server-error {
  font-size: 1.5rem;
  padding: 0.8rem 1rem;
  background-color: #e63946;
  font-weight: 600;
  color: #fff;
}

.register-text {
  margin-bottom: 1.5rem;
  .text {
    font-size: 1.5rem;
  }

  .link {
    text-decoration: none;
    font-size: 1.5rem;
  }
}

.email,
.password {
  margin-bottom: 1.5rem;
}

.login-container {
  padding: 0 20px;
  margin-top: 2rem;
}

.loading-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.spin-container {
  text-align: center;
  margin-left: 1rem;
}
#error-text {
  font-size: 1.4rem;
  color: #e63946;
  font-weight: 500;
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

.login-main-container {
  height: 100vh;
}
</style>
