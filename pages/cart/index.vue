<template>
  <div>
    <div v-if="cart.length > 0" class="container">
      <NavBar></NavBar>
      <div class="heading mb-2 mt-1 ml-xs text-xl text-bold">
        Shopping Cart({{ cart.length }})
      </div>
      <div v-for="book in cart" :key="book.id" class="item">
        <CartItem :book="book"></CartItem>
      </div>

      <div class="overview">
        <div class="price-total">
          <div class="text-medium text-bold">Price Total</div>
          <div class="text-medium">
            <div v-if="totalPrice">GH¢{{ totalPrice | twoDecimalPlace }}</div>
            <div v-else>GH¢{{ totalCartPrice | twoDecimalPlace }}</div>
          </div>
        </div>
        <div class="shipping-cost">
          <div class="text-medium text-bold">Shipping Cost</div>
          <div v-if="totalEstimatedShippingCost === 0" class="text-medium">
            Free
          </div>
          <div v-else class="text-medium">
            {{ totalEstimatedShippingCost || 'Free' }}
          </div>
        </div>
        <div class="sub-total">
          <div class="text-medium text-bold">Subtotal</div>
          <div class="text-medium">
            <div v-if="totalPrice">
              GH¢{{
                ((totalEstimatedShippingCost || 0) + totalPrice)
                  | twoDecimalPlace
              }}
            </div>
            <div v-else>
              GH¢{{
                ((totalEstimatedShippingCost || 0) + totalCartPrice)
                  | twoDecimalPlace
              }}
            </div>
          </div>
        </div>
        <div v-if="!$store.state.signin.token" class="mt-1 mb-1 text-medium">
          You are currently not signed in. To save these items or see your
          previously saved items, <nuxt-link to="/login">sign in</nuxt-link>
        </div>
        <div class="btn-container">
          <baseButton button-class="btn-primary">Check Out</baseButton>
        </div>
      </div>
      <Footer></Footer>
    </div>
    <div v-else>
      <NavBar></NavBar>
      <div class="no-cart-container">
        <div class="heading mt-1 ml-xs text-xl text-bold">Shopping Cart</div>
        <div class="container">
          <div class="image-box">
            <img
              class="image"
              src="~/assets/illustrations/nocart-illustration.jpeg"
              alt="No Item in cart"
            />
          </div>
          <div class="no-cart-heading mt-2 ml-xs text-xl text-bold">
            No item in cart. Don't worry.
          </div>
          <a href="#" class="link">check these books out</a>
        </div>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import Cookies from 'js-cookie'
import { mapState } from 'vuex'
import CartItem from '~/components/DefaultComponent/CartItem.vue'
import NavBar from '~/components/DefaultComponent/navbar'
import Footer from '~/components/HomeComponent/Footer.vue'
import baseButton from '~/components/DefaultComponent/baseButton'
export default {
  components: {
    CartItem,
    NavBar,
    Footer,
    baseButton,
  },

  filters: {
    twoDecimalPlace(value) {
      return value.toFixed(2)
    },
  },

  async fetch() {
    const { store } = this.$nuxt.context

    if (store.state.signin.token) {
      const { data } = await axios.get(`${process.env.baseUrl}/user-cart/`, {
        headers: {
          Authorization: 'Token ' + store.state.signin.token,
        },
      })
      store.commit('CART_ITEMS', data.results)
    } else if (store.state.cartVal) {
      const cartItems = []

      let cart = store.state.cartVal
      cart = JSON.parse(decodeURIComponent(cart))

      for (const item of cart) {
        await axios
          .get(`${process.env.baseUrl}/books/${item.slug}/`)
          .then((res) => {
            cartItems.push({ book: res.data })
          })
          .catch((err) => {
            console.log(err.response)
          })
      }

      store.commit('CART_ITEMS', cartItems)
    }
  },

  computed: {
    totalPrice() {
      let price = 0
      this.cart.forEach((item) => {
        price += item.final_price
      })
      return parseFloat(price)
    },

    totalCartPrice() {
      let price = 0
      this.cart.forEach((item) => {
        if (item.book.discount_price) {
          price += item.book.discount_price
        } else if (item.book.price) {
          price += item.book.price
        }
      })
      return parseFloat(price)
    },

    ...mapState(['cart']),

    totalEstimatedShippingCost() {
      let price = 0
      this.cart.forEach((item) => {
        price += item.estimated_shipping_cost
      })
      return price
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  .item {
    display: flex;
    flex-direction: column;

    text-decoration: none;
    color: inherit;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  .btn-container {
    margin-top: 1.5rem;
  }

  .overview {
    margin-top: 3rem;
    padding: 0 10px;
    .price-total,
    .shipping-cost,
    .sub-total {
      display: flex;
      justify-content: space-between;
      padding: 8px 10px;
      background-color: #f4f4f4;
      border-radius: 5px;
    }

    .sub-total {
      margin-top: 15px;
    }

    .shipping-cost {
      background-color: #fff;
      margin-top: 8px;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        background-color: #e4e4e4;
        bottom: -5px;
        left: 50%;
        right: 50%;
        transform: translate(-50%, -50%);
        height: 2px;
        width: 60%;
      }
    }
  }
}

.no-cart-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .no-cart-heading {
      text-align: center;
      font-family: $secondary-font-1;
    }

    .link {
      font-size: 1.6rem;
      margin: 1rem auto 0 auto;
      text-decoration: none;
      padding: 0.4rem 0;
      font-weight: 700;
      color: inherit;
      position: relative;

      &::after {
        content: '';
        width: 100%;
        height: 3px;
        background-color: #fca21146;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }

      &::before {
        content: '';
        width: 0%;
        height: 3px;
        background-color: #fca311;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        transition: 0.3s ease;
      }

      &:hover::before {
        width: 100%;
      }
    }

    .image-box {
      width: 90%;
      height: 250px;

      .image {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.heading {
  display: block;
  padding: 0.8rem;
  margin-left: 0.6rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 3px;
    margin-left: 1rem;
    background-color: $primary-bgcolor-2;
  }
}
</style>
