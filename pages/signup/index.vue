<template>
  <div class="signup-container">
    <navbar></navbar>
    <div class="singin-container">
      <div class="header-text">Register</div>
      <ValidationObserver ref="form" v-slot="{ handleSubmit }">
        <div class="first-last-name">
          <div class="first-name">
            <ValidationProvider
              v-slot="{ errors }"
              name="first_name"
              mode="eager"
              rules="required"
            >
              <baseInput
                v-model="data.first_name"
                :error-style="Boolean(errors[0])"
                placeholder="First Name"
                label="First Name"
              ></baseInput>

              <span id="error-text">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="last-name">
            <ValidationProvider
              v-slot="{ errors }"
              name="last_name"
              mode="eager"
              rules="required"
            >
              <baseInput
                v-model="data.last_name"
                placeholder="Last Name"
                :error-style="Boolean(errors[0])"
                label="Last Name"
              ></baseInput>

              <span id="error-text">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <!-- <ValidationProvider
          v-slot="{ errors }"
          name="username"
          rules="required|unique"
        >
          <div class="username">
            <baseInput
              v-model="data.username"
              placeholder="Username"
              :username-loading="usernameLoading"
              :error-style="Boolean(errors[0])"
              label="Username"
            ></baseInput>
            <span id="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider> -->
        <ValidationProvider
          v-slot="{ errors }"
          name="email"
          mode="eager"
          rules="required"
        >
          <div class="email">
            <baseInput
              v-model="data.email"
              placeholder="Email"
              :error-style="Boolean(errors[0])"
              label="Email"
              type="email"
            ></baseInput>
            <span id="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="password1"
          mode="eager"
          rules="required"
        >
          <div class="password-1">
            <baseInput
              v-model="data.password1"
              placeholder="Password"
              :error-style="Boolean(errors[0])"
              label="Password"
              type="password"
            ></baseInput>
            <span id="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="password2"
          mode="eager"
          rules="required|is-password-thesame"
        >
          <div class="password-2">
            <baseInput
              v-model="data.password2"
              placeholder="Password"
              :error-style="Boolean(errors[0])"
              label="Confirm Password"
              type="password"
            ></baseInput>
            <span id="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <div v-if="$route.query.redirect" class="login-text">
          <span class="text">Already have an account? </span
          ><nuxt-link
            :to="{
              path: '/login',
              query: { redirect: `${$route.query.redirect}` || '/' },
            }"
            class="link"
            >Login</nuxt-link
          >
        </div>
        <div v-else class="login-text">
          <span class="text">Already have an account? </span
          ><nuxt-link to="/login" class="link">Login</nuxt-link>
        </div>
        <div class="register-btn">
          <baseButton
            :disabled="loading"
            :button-class-disabled="loading ? 'btn-disabled' : ''"
            button-class="btn-secondary"
            @click="handleSubmit(signup)"
            ><div v-if="!loading">Login</div>
            <div v-if="loading" class="spinner">
              <ButtonLoadingSpinner></ButtonLoadingSpinner></div
          ></baseButton>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { extend } from 'vee-validate'
import { mapState } from 'vuex'
import navbar from '~/components/DefaultComponent/navbar.vue'
import baseInput from '~/components/DefaultComponent/baseInput'
import baseButton from '~/components/DefaultComponent/baseButton'
import ButtonLoadingSpinner from '~/components/DefaultComponent/button-loading-spinner.vue'
export default {
  components: {
    navbar,
    baseInput,
    baseButton,
    ButtonLoadingSpinner,
  },
  data() {
    return {
      data: {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password1: '',
        password2: '',
      },
      usernameLoading: false,
      redirectQuery: this.$route.query.redirect || '/',
    }
  },
  computed: {
    ...mapState({
      loading: (state) => state.signin.loading,
    }),
    ...mapState({
      signupErrors: (state) => state.signin.signupErrors,
    }),
  },
  mounted() {
    extend('is-password-thesame', {
      validate: this.isPasswordThesame,
      message: "Password don't match",
    })
  },
  methods: {
    async signup() {
      await this.$store.commit('signin/LOADING_STATE')
      await this.$store.dispatch('signin/signup', {
        data: { ...this.data },
        redirect: this.redirectQuery,
      })
      this.$refs.form.setErrors(this.signupErrors)
    },

    isPasswordThesame() {
      if (this.data.password1 === this.data.password2) {
        return true
      } else {
        return false
      }
    },

    // async isUsernameUnique() {
    //   this.usernameLoading = true
    //   try {
    //     await axios.get(
    //       `${process.env.baseUrl}/usernames/${this.data.username}/`
    //     )
    //     this.usernameLoading = false
    //     return false
    //   } catch (err) {
    //     if (err.response.status === 404) {
    //       this.usernameLoading = false
    //       return true
    //     }
    //   }
    // },
  },
}
</script>

<style lang="scss" scoped>
.header-text {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.login-text {
  margin-bottom: 1.5rem;
  .text {
    font-size: 1.5rem;
  }

  .link {
    text-decoration: none;
    font-size: 1.5rem;
  }
}

.first-last-name {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  .first-name,
  .last-name {
    flex: 0 0 48%;
  }
}

.username,
.email,
.password-1,
.password-2 {
  margin-bottom: 1.5rem;
}

.username {
  position: relative;
}

.singin-container {
  padding: 0 20px;
  margin-top: 2rem;
}

.loading-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

#error-text {
  font-size: 1.4rem;
  color: #e63946;
  font-weight: 500;
}

.spin-container {
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

.signup-container {
  height: 100vh;
}
</style>
