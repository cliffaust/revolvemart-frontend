import Cookies from 'js-cookie'
import axios from 'axios'

export const state = () => ({
  navbarSlider: false,
  cart: [],
  cartVal: null,
  inCart: false,
})

export const mutations = {
  CHANGE_NAVBAR_SLIDER(state, value) {
    state.navbarSlider = value
  },

  CART_ITEMS(state, value) {
    // console.log('This is it ', value)
    state.cart = value
  },

  ADD_CART(state, value) {
    state.cartVal = value
  },

  ALREADY_IN_CART(state, value) {
    state.inCart = value
  },
}

export const actions = {
  changeNavbarState({ commit }, boolVal) {
    commit('CHANGE_NAVBAR_SLIDER', boolVal)
  },

  addToCart({ commit }, bookSlug) {
    const token = Cookies.get('token')

    if (token) {
      axios
        .post(
          `${process.env.baseUrl}/books/${bookSlug}/add-to-cart/`,
          { quantity: 1 },
          {
            headers: {
              Authorization: 'Token ' + token,
            },
          }
        )
        .then(() => location.reload())
        .catch((err) => {
          console.log(err.response)
        })
    } else if (!token) {
      let cookieVal = Cookies.get('cart')

      if (cookieVal !== undefined) {
        cookieVal = JSON.parse(cookieVal)
      }

      const data = [...(cookieVal || [])]
      const exist = data.some((val) => {
        return val.slug === bookSlug
      })
      if (!exist) {
        data.push({ slug: bookSlug })
        Cookies.set('cart', JSON.stringify(data))
        location.reload()
      }
    }
  },

  cartInit({ commit }, req) {
    let cart
    if (req) {
      if (req.headers.cookie) {
        cart = req.headers.cookie.split(';').map((element) => element.trim())
        cart = cart.find((c) => c.startsWith('cart='))

        if (cart) {
          cart = cart.split('=')[1]
          commit('ADD_CART', cart)
        }
      }
    }
  },
}
