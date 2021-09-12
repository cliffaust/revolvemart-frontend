<template>
  <div v-if="user_profile">
    <NavBar></NavBar>
    <div class="heading">Item</div>
    <nuxt-link :to="{ path: `/books/${book.slug}` }" class="item">
      <div class="image-box">
        <img class="image" :src="book.cover_image" alt="Image" />
      </div>
      <div class="description">
        <div class="title">{{ book.title }}</div>
        <div class="author">By {{ book.author }}</div>
        <div class="quantity text-bold">{{ book.quantity }}</div>

        <div class="price-box">
          <div v-if="book.discount_price" class="new-price">
            GH¢{{ book.discount_price }}
          </div>
          <div
            class="price"
            :style="[
              book.discount_price
                ? { 'text-decoration': 'line-through', color: '#e63947' }
                : '',
            ]"
          >
            GH¢{{ book.price }}
          </div>
        </div>
      </div>
    </nuxt-link>
    <div class="heading">Delivery Details</div>
    <div class="card">
      <div class="note-header text-large mb-1 text-bold">Shipping Adress</div>
      <div class="name text-bold text-small">
        {{ user_profile.first_name }} {{ user_profile.last_name }}
      </div>
      <div class="address text-0-4 mt-xs">
        {{ address.address }}
      </div>
      <div class="town text-bold text-0-4 mt-xs">
        {{ address.town }}
      </div>
      <div class="phone text-0-4 mt-xs">Phone number: {{ address.phone }}</div>
      <nuxt-link
        v-slot="{ href, navigate }"
        custom
        :to="{
          path: `/books/${book.slug}/shipping-address/${address.id}/edit/`,
        }"
      >
        <div :href="href" class="btn-box" @click="navigate">
          <button class="btn">edit</button>
        </div>
      </nuxt-link>
    </div>
    <div v-if="shippingNote.note" class="card">
      <div class="note-header text-large mb-1 text-bold">Delivery Note</div>
      <div class="note text-0-4">{{ shippingNote.note }}</div>
      <nuxt-link
        v-slot="{ href, navigate }"
        custom
        :to="{
          path: `/books/${book.slug}/shipping-address/${address.id}/note/`,
        }"
      >
        <div class="btn-box">
          <button :href="href" class="btn" @click="navigate">edit</button>
          <button class="btn btn-delete" @click="removeNote">remove</button>
        </div>
      </nuxt-link>
    </div>
    <div class="heading">Price Overview</div>
    <div class="overview">
      <div class="price-total">
        <div class="text-medium text-bold">Price Total</div>
        <div class="text-medium">
          <div v-if="book.discount_price">
            GH¢{{ book.discount_price | twoDecimalPlace }}
          </div>
          <div v-else>GH¢{{ book.price | twoDecimalPlace }}</div>
        </div>
      </div>
      <div class="shipping-cost">
        <div class="text-medium text-bold">Shipping Cost</div>
        <div class="text-medium">Free</div>
      </div>
      <div class="sub-total">
        <div class="text-medium text-bold">Subtotal</div>
        <div class="text-medium">
          <div v-if="book.discount_price">
            GH¢{{ book.discount_price | twoDecimalPlace }}
          </div>
          <div v-else>GH¢{{ book.price | twoDecimalPlace }}</div>
        </div>
      </div>
      <div class="btn-container mt-2">
        <div @click="pay">
          <Payment
            :class="['paymentBtn', spinner ? 'payment-btn-disabled' : '']"
            :amount="price"
            :email="user_profile.email"
            :paystackkey="'pk_test_ed65a31e407a5efb43493ea023ebb86b3170e0b4'"
            :callback="callback"
            :reference="reference"
            :close="closePayment"
            :embed="false"
            :currency="'GHS'"
            :disabled="spinner"
          >
            <i class="fas fa-money-bill-alt"></i>
            <div v-if="!spinner">Check Out</div>
            <div v-if="spinner" class="spinner">
              <ButtonLoadingSpinner></ButtonLoadingSpinner>
            </div>
          </Payment>
        </div>
        <!-- <Button
          :button-class-disabled="spinner ? 'btn-disabled' : ''"
          button-class="btn-secondary"
          ></Button> -->
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import Cookies from 'js-cookie'
import paystack from 'vue-paystack/src/paystack.vue'
// import Button from '~/components/DefaultComponent/baseButton'
import NavBar from '~/components/DefaultComponent/navbar'
import Footer from '~/components/HomeComponent/Footer.vue'
import ButtonLoadingSpinner from '~/components/DefaultComponent/button-loading-spinner.vue'
export default {
  components: {
    // Button,
    NavBar,
    Footer,
    ButtonLoadingSpinner,
    Payment: paystack,
  },

  filters: {
    twoDecimalPlace(value) {
      return value.toFixed(2)
    },
  },

  middleware: ['checkUser'],

  async asyncData({ store, params }) {
    const { data } = await axios.get(
      `${process.env.baseUrl}/user-address/${params.id}/`,
      {
        headers: {
          Authorization: 'Token ' + store.state.signin.token,
        },
      }
    )

    const note = await axios.get(`${process.env.baseUrl}/shipping-note/`, {
      headers: {
        Authorization: 'Token ' + store.state.signin.token,
      },
    })

    const book = await axios.get(`${process.env.baseUrl}/books/${params.slug}/`)
    return {
      address: data,
      shippingNote: note.data,
      book: book.data,
    }
  },

  data() {
    return {
      spinner: false,
    }
  },

  computed: {
    ...mapState(['user_profile']),

    reference() {
      let text = ''
      const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

      return text
    },

    price() {
      if (this.book.discount_price) {
        return parseInt(
          (Math.floor(this.book.discount_price * 100) / 100)
            .toFixed(2)
            .replace('.', ''),
          10
        )
      } else {
        return parseInt(
          (Math.floor(this.book.price * 100) / 100).toFixed(2).replace('.', ''),
          10
        )
      }
    },
  },

  methods: {
    async removeNote() {
      try {
        await axios.put(
          `${process.env.baseUrl}/shipping-note/`,
          { note: null },
          {
            headers: {
              Authorization: 'Token ' + Cookies.get('token'),
            },
          }
        )

        location.reload()
      } catch (error) {
        console.log(error.response.data)
      }
    },

    pay() {
      this.spinner = true
    },

    callback(response) {
      location.reload()
    },
    closePayment() {
      this.spinner = false
      console.log('Payment closed')
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
  margin-top: 1.5em;
  width: 90%;
  padding: 0.5rem;
  border-radius: 1rem;
  margin: 0 auto 20px auto;
  display: flex;
  justify-content: space-between;
  // flex-direction: column;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  color: inherit;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
}

.paymentBtn {
  width: 100%;
  padding: 1.2rem 1rem;
  background-color: $primary-bgcolor-2;
  font-weight: 600;
  border-radius: 1rem;
  text-transform: uppercase;
  font-size: 1.6rem;
  color: $primary-text-color;
  cursor: pointer;
  border: 2px solid $primary-bgcolor-2;
  font-family: $secondary-font-1;

  &:focus {
    outline: none;
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

.image-box {
  height: 100%;
  width: 100%;
  flex: 0 0 45%;

  .image {
    height: 120px;
    width: 120px;
    border-radius: 0.5rem;
  }
}
.heading {
  display: block;
  padding: 0.8rem;
  margin-left: 0.6rem;
  margin-bottom: 2rem;
  position: relative;
  font-weight: 800;
  font-size: 2.5rem;
  font-family: $secondary-font-1;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    margin-left: 1rem;
    background-color: $primary-bgcolor-2;
  }
}

.card {
  width: 90%;
  padding: 0.5rem;
  border-radius: 1rem;
  margin: 0 auto 20px auto;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  color: inherit;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
}

.title {
  font-size: 1.4rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.payment-btn-disabled {
  opacity: 0.5;
  cursor: unset;
}

.btn-box {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  .btn {
    padding: 6px 20px;
    border-radius: 1rem;
    background-color: $primary-bgcolor-1;
    border: 2px solid $primary-bgcolor-1;
    color: #fff;
    text-transform: uppercase;
    transition: 0.5s ease;
    font-weight: 600;
    font-size: 1.6rem;
    cursor: pointer;
    font-family: $secondary-font-1;
    text-transform: lowercase;
  }

  .btn-delete {
    background-color: #e6394736;
    border: 2px solid #e639473a;
    color: inherit;
  }
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
