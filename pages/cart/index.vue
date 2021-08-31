<template>
  <div class="container">
    <NavBar></NavBar>
    <div class="heading mb-2 ml-xs text-xl text-bold">Shopping Cart(3)</div>
    <div v-for="book in books.slice(0, 3)" :key="book.id" class="item">
      <CartItem :book="book"></CartItem>
    </div>

    <div class="overview">
      <div class="price-total">
        <div class="text-medium text-bold">Price Total</div>
        <div class="text-medium">GH¢244.95</div>
      </div>
      <div class="shipping-cost">
        <div class="text-medium text-bold">Shipping Cost</div>
        <div class="text-medium">GH¢15.40</div>
      </div>
      <div class="sub-total">
        <div class="text-medium text-bold">Subtotal</div>
        <div class="text-medium">GH¢260.35</div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
// import Cookies from 'js-cookie'
import CartItem from '~/components/DefaultComponent/CartItem.vue'
import NavBar from '~/components/DefaultComponent/navbar'
import Footer from '~/components/HomeComponent/Footer.vue'
export default {
  components: {
    CartItem,
    NavBar,
    Footer,
  },

  async asyncData({ req }) {
    let token
    let cart = []
    if (req) {
      if (req.headers.cookie) {
        token = req.headers.cookie.split(';').map((element) => element.trim())
        token = token.find((c) => c.startsWith('token='))

        if (token) {
          token = token.split('=')[1]
          try {
            cart = await axios.get(`${process.env.baseUrl}/user-cart/`, {
              headers: {
                Authorization: 'Token ' + token,
              },
            })
            console.log('This cart', cart)
          } catch (error) {
            console.log(error)
          }
        }
      }
    }
    return {
      books: cart.data.results,
    }
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
</style>
