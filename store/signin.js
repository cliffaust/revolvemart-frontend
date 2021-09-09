import Cookies from 'js-cookie'
import axios from 'axios'

export const state = () => ({
  token: null,
  loading: false,
  loginError: false,
  signupErrors: [],
})

export const mutations = {
  ADD_TOKEN(state, data) {
    state.token = data
  },
  async LOGOUT(state, token) {
    try {
      await axios.post(`${process.env.baseUrl}/rest-auth/logout/`, '', {
        headers: {
          Authorization: 'Token ' + state.token,
        },
      })
      state.token = null
      Cookies.remove('token')
      this.$router.push('/')
    } catch (error) {
      if (error.response.status === 401) {
        Cookies.remove('token')
        this.$router.push('/')
      }
    }
    console.log(token)
  },
  LOADING_STATE(state) {
    state.loading = true
  },
  STOP_LOADING_STATE(state) {
    state.loading = false
  },
  CHANGE_LOGIN_ERROR_STATE(state) {
    state.loginError = true
  },
  ADD_ERROR(state, data) {
    state.signupErrors = data
  },
}

export const actions = {
  async signup({ commit, rootState }, payload) {
    try {
      const response = await axios.post(
        `${process.env.baseUrl}/rest-auth/registration/`,
        payload.data
      )
      Cookies.set('token', response.data.key)
      commit('ADD_TOKEN', response.data.key)
      if (rootState.cartVal) {
        // const cartItems = []

        let cart = rootState.cartVal
        cart = JSON.parse(decodeURIComponent(cart))

        // console.log(cart)

        for (const item of cart) {
          await axios
            .post(
              `${process.env.baseUrl}/books/${item.slug}/add-to-cart/`,
              {
                quantity: 1,
              },
              {
                headers: {
                  Authorization: 'Token ' + response.data.key,
                },
              }
            )
            .catch((err) => {
              console.log(err.response)
            })
        }
        Cookies.remove('cart')
      }
      this.$router.replace(payload.redirect, () => this.$router.go(0))
    } catch (error) {
      commit('STOP_LOADING_STATE')
      commit('ADD_ERROR', error.response.data)
      console.log(error.response.data)
    }
  },

  async login({ commit, rootState }, payload) {
    try {
      const response = await axios.post(
        `${process.env.baseUrl}/rest-auth/login/`,
        payload.data
      )
      Cookies.set('token', response.data.key)
      commit('ADD_TOKEN', response.data.key)

      if (rootState.cartVal) {
        // const cartItems = []

        let cart = rootState.cartVal
        cart = JSON.parse(decodeURIComponent(cart))

        // console.log(cart)

        for (const item of cart) {
          await axios
            .post(
              `${process.env.baseUrl}/books/${item.slug}/add-to-cart/`,
              {
                quantity: 1,
              },
              {
                headers: {
                  Authorization: 'Token ' + response.data.key,
                },
              }
            )
            .catch((err) => {
              console.log(err.response)
            })
        }

        Cookies.remove('cart')
      }

      this.$router.replace(payload.redirect, () => this.$router.go(0))
    } catch (error) {
      commit('STOP_LOADING_STATE')
      if (error.response.status === 400) {
        commit('CHANGE_LOGIN_ERROR_STATE')
      }
      console.log(error.response.data)
    }
  },

  checkAuth({ commit }, req) {
    let token
    if (req) {
      if (req.headers.cookie) {
        token = req.headers.cookie.split(';').map((element) => element.trim())
        token = token.find((c) => c.startsWith('token='))

        if (token) {
          token = token.split('=')[1]
          commit('ADD_TOKEN', token)
        }
      }
    }
  },
}
