<template>
  <nuxt-link :to="{ path: `/books/${book.book.slug}` }" class="cart-item">
    <div class="image-box">
      <img class="image" :src="book.book.cover_image" alt="Image" />
    </div>
    <div class="description">
      <div class="title">{{ book.book.title }}</div>
      <div class="author">By {{ book.book.author }}</div>
      <div class="quantity text-bold">{{ book.book.quantity }}</div>

      <div class="price-box">
        <div v-if="book.book.discount_price" class="new-price">
          GH¢{{ book.book.discount_price }}
        </div>
        <div
          class="price"
          :style="[
            book.book.discount_price
              ? { 'text-decoration': 'line-through', color: '#e63947' }
              : '',
          ]"
        >
          GH¢{{ book.book.price }}
        </div>
      </div>

      <div class="remove-item mt-1" @click.prevent="removeCart">Remove</div>
    </div>
  </nuxt-link>
</template>

<script>
import Cookies from 'js-cookie'
import axios from 'axios'
export default {
  props: {
    book: {
      type: [Object, Array],
      default: null,
    },
  },

  methods: {
    async removeCart() {
      const token = Cookies.get('token')

      if (token) {
        await axios
          .delete(`${process.env.baseUrl}/user-cart/${this.book.id}`, {
            headers: {
              Authorization: 'Token ' + this.$store.state.signin.token,
            },
          })
          .then(() => location.reload())
          .catch((err) => console.log(err.response))
      } else if (this.$store.state.cartVal) {
        let cart = this.$store.state.cartVal
        cart = JSON.parse(decodeURIComponent(cart))

        const newCart = cart.filter((el) => el.slug !== this.book.book.slug)

        Cookies.set('cart', JSON.stringify(newCart))

        location.reload()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.cart-item {
  margin-top: 1.5em;
  width: 90%;
  padding: 0.5rem;
  border-radius: 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  color: inherit;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
}

.image-box {
  height: 120px;
  width: 120px;
  flex: 0 0 45%;

  .image {
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
  }
}

.description {
  flex: 0 0 50%;
}

.remove-item {
  float: right;
  font-size: 1.4rem;
  // cursor: pointer;
  color: #e63947;
  padding: 0.6rem 0.5rem;
  border-radius: 0.5rem;
  background-color: #e6394736;
  font-weight: bold;
  z-index: 100;
}

.title {
  font-size: 1.4rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.quantity {
  font-size: 1.4rem;
  margin-top: 0.7rem;
}

.author {
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.price-box {
  display: flex;
  margin-top: 1rem;

  .price {
    font-size: 1.3rem;
    font-weight: 600;
  }

  .new-price {
    font-size: 1.3rem;
    font-weight: 600;
    margin-right: 0.8rem;
  }
}
</style>
