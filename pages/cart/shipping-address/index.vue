<template>
  <div v-if="user_profile">
    <NavBar></NavBar>
    <div v-if="shipping_address.length > 0" class="main-container">
      <div class="heading">Select a shipping address</div>
      <!-- <h3 v-if="defaultShippingAddress.length > 0">
        {{ defaultShippingAddress }}
      </h3>
      <h3 v-else>{{ shipping_address[1] }}</h3> -->

      <div v-if="defaultShippingAddress.length > 0" class="card">
        <div class="name text-bold text-small">
          {{ user_profile.first_name }} {{ user_profile.last_name }}
        </div>
        <div class="address text-0-4 mt-xs">
          {{ defaultShippingAddress[0].address }}
        </div>
        <div class="town text-bold text-0-4 mt-xs">
          {{ defaultShippingAddress[0].town }}
        </div>
        <div class="phone text-0-4 mt-xs">
          Phone number: {{ defaultShippingAddress[0].phone }}
        </div>
        <nuxt-link
          v-slot="{ href, navigate }"
          custom
          :to="{ path: `${defaultShippingAddress[0].id}/checkout/` }"
          append
        >
          <div :href="href" class="mt-1 mb-1" @click="navigate">
            <Button text-transform="lowercase" button-class="btn-secondary"
              >Deliver to this address</Button
            >
          </div>
        </nuxt-link>
        <nuxt-link
          :to="{ path: `${defaultShippingAddress[0].id}/edit/` }"
          class="mt-1 mb-1"
          append
        >
          <Button text-transform="lowercase" button-class="backgroud-open-btn"
            >Edit address</Button
          >
        </nuxt-link>
        <nuxt-link
          v-slot="{ href, navigate }"
          custom
          :to="{ path: `${defaultShippingAddress[0].id}/note/` }"
          append
        >
          <div class="mt-1 mb-1" :href="href" @click="navigate">
            <Button text-transform="lowercase" button-class="backgroud-open-btn"
              >Add delivery instructions</Button
            >
          </div>
        </nuxt-link>
      </div>
      <div v-else class="card">
        <div class="name text-bold text-small">
          {{ user_profile.first_name }} {{ user_profile.last_name }}
        </div>
        <div class="address text-0-4 mt-xs">
          {{ shipping_address[0].address }}
        </div>
        <div class="town text-bold text-0-4 mt-xs">
          {{ shipping_address[0].town }}
        </div>
        <div class="phone text-0-4 mt-xs">
          Phone number: {{ shipping_address[0].phone }}
        </div>
        <div class="mt-1 mb-1">
          <Button text-transform="lowercase" button-class="btn-secondary"
            >Deliver to this address</Button
          >
        </div>
        <nuxt-link
          :to="{ path: `${shipping_address[0].id}/edit/` }"
          class="mt-1 mb-1"
          append
        >
          <Button text-transform="lowercase" button-class="backgroud-open-btn"
            >Edit address</Button
          >
        </nuxt-link>
        <nuxt-link
          v-slot="{ href, navigate }"
          custom
          :to="{ path: `${shipping_address[0].id}/note/` }"
          append
        >
          <div class="mt-1 mb-1" :href="href" @click="navigate">
            <Button text-transform="lowercase" button-class="backgroud-open-btn"
              >Add delivery instructions</Button
            >
          </div>
        </nuxt-link>
      </div>
      <nuxt-link
        v-slot="{ href, navigate }"
        custom
        :to="{ path: 'new/' }"
        append
      >
        <div
          class="add-address card text-medium"
          :href="href"
          @click="navigate"
        >
          Add a new address
        </div>
      </nuxt-link>
      <div
        v-if="notDefaultShippingAddress.length > 0"
        class="select-address card"
      >
        <div
          class="select-address-heading"
          @click="showSelectAddress = !showSelectAddress"
        >
          <div class="text text-medium">Select a different address</div>
          <font-awesome-icon
            v-if="showSelectAddress"
            :icon="['fas', 'chevron-up']"
            class="icon"
          />
          <font-awesome-icon
            v-else
            :icon="['fas', 'chevron-down']"
            class="icon"
          />
        </div>
        <div v-if="showSelectAddress" class="select-container">
          <div
            v-for="address in notDefaultShippingAddress"
            :key="address.id"
            class="container"
            @click="setDefault(address)"
          >
            <div class="address text-0-4 mt-xs">
              {{ address.address }}
            </div>
            <div class="town text-bold text-0-4 mt-xs">
              {{ address.town }}
            </div>
            <div class="phone text-0-4 mt-xs">
              Phone number: {{ address.phone }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="no-address-container">
        <div class="heading mt-1 ml-xs text-xl text-bold">
          Add a shipping address
        </div>
        <div class="container">
          <div class="image-box">
            <img
              class="image"
              src="~/assets/illustrations/no-address.png"
              alt="No Item in cart"
            />
          </div>
          <div class="no-cart-heading mt-2 ml-xs text-xl text-bold">
            No shipping address. Don't worry.
          </div>
          <nuxt-link
            v-slot="{ href, navigate }"
            custom
            :to="{ path: 'new/' }"
            append
          >
            <a :href="href" class="link" @click="navigate">Add a new address</a>
          </nuxt-link>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
import { mapState } from 'vuex'
import Button from '~/components/DefaultComponent/baseButton'
import NavBar from '~/components/DefaultComponent/navbar'
import Footer from '~/components/HomeComponent/Footer.vue'
export default {
  components: {
    NavBar,
    Footer,
    Button,
  },

  middleware: ['checkUser'],

  async asyncData({ store }) {
    // const { store } = this.$nuxt.context

    if (store.state.signin.token) {
      const { data } = await axios.get(`${process.env.baseUrl}/user-address/`, {
        headers: {
          Authorization: 'Token ' + store.state.signin.token,
        },
      })
      return {
        shipping_address: data.results,
      }
    }
  },

  data() {
    return {
      showSelectAddress: false,
    }
  },

  // fetchOnServer: false,

  computed: {
    ...mapState(['user_profile']),

    defaultShippingAddress() {
      const address = this.shipping_address.filter(
        (address) => address.default === true
      )
      return address
    },

    notDefaultShippingAddress() {
      const defaultAddress = this.shipping_address.filter(
        (address) => address.default === true
      )

      if (defaultAddress.length > 0) {
        const notDefaultAddress = this.shipping_address.filter(
          (address) => address.id !== defaultAddress[0].id
        )
        return notDefaultAddress
      } else {
        const notDefaultAddress = this.shipping_address.filter(
          (address) => address.id !== this.shipping_address[0].id
        )
        return notDefaultAddress
      }
    },
  },

  methods: {
    async setDefault(address) {
      const formData = new FormData()
      formData.append('default', 'true')
      try {
        await axios.patch(
          `${process.env.baseUrl}/user-address/${address.id}/`,
          formData,
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
  },
}
</script>

<style lang="scss" scoped>
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

.select-address {
  &-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
      width: 20px;
      height: 20px;
    }
  }
}

.select-container {
  .container {
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    position: relative;

    // &:hover {
    //   background-color: #f4f4f4;
    // }

    &:not(:last-child) {
      &::after {
        content: '';
        position: absolute;
        width: 90%;
        margin: 0 auto;
        height: 1px;
        background-color: rgba(51, 51, 51, 0.233);
        bottom: -5px;
      }
    }

    // &:not(:last-child) {
    //   border-bottom: 1px solid rgba(51, 51, 51, 0.233);
    // }
  }
}

.no-address-container {
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

.add-address,
.select-address {
  margin-top: 2rem !important;
  cursor: pointer;
}

.card {
  width: 90%;
  padding: 0.5rem;
  border-radius: 1rem;
  margin: 0 auto;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  color: inherit;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
}

// .main-container {
//   height: 60vh;
// }
</style>
