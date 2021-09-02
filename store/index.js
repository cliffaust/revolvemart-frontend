import Cookies from 'js-cookie'
import axios from 'axios'

export const state = () => ({
  navbarSlider: false,
  cart: [],
  cartVal: null,
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
}

export const actions = {
  changeNavbarState({ commit }, boolVal) {
    commit('CHANGE_NAVBAR_SLIDER', boolVal)
  },

  // async cartItems({ commit }, storeVal) {
  //   const store = storeVal

  //   if (store.state.signin.token) {
  //     const { data } = await axios.get(`${process.env.baseUrl}/user-cart/`, {
  //       headers: {
  //         Authorization: 'Token ' + store.state.signin.token,
  //       },
  //     })
  //     commit('CART_ITEMS', data.results)
  //   } else if (store.state.cartVal) {
  //     const cartItems = []

  //     let cart = store.state.cartVal
  //     cart = JSON.parse(decodeURIComponent(cart))

  //     for (const item of cart) {
  //       await axios
  //         .get(`${process.env.baseUrl}/books/${item.slug}/`)
  //         .then((res) => {
  //           cartItems.push({ book: res.data })
  //         })
  //         .catch((err) => {
  //           console.log(err)
  //         })
  //     }

  //     // console.log('Then', cartItems)

  //     commit('CART_ITEMS', cartItems)
  //   }
  // },

  addToCart({ commit }, bookSlug) {
    const token = Cookies.get('token')

    if (token) {
      axios.post(`${process.env.baseUrl}/add-to-cart/`, {
        headers: {
          Authorization: 'Token ' + token,
        },
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
