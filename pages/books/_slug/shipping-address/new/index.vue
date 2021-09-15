<template>
  <div>
    <NavBar></NavBar>
    <div class="heading">Add a new shipping address</div>
    <div class="form">
      <div class="address">
        <baseInput
          v-model="data.address"
          placeholder="Enter address"
          label="Address"
        ></baseInput>
      </div>
      <div class="town">
        <baseInput
          v-model="data.town"
          placeholder="Enter your town"
          label="Town"
        ></baseInput>
      </div>
      <div class="region">
        <baseInput
          v-model="data.region"
          placeholder="Enter region"
          label="Region"
        ></baseInput>
      </div>
      <div class="phone">
        <baseInput
          v-model="data.phone"
          placeholder="Enter phone number"
          label="Phone number"
        ></baseInput>
      </div>
      <div class="default">
        <input id="checkbox" v-model="data.default" type="checkbox" />
        <label for="checkbox" class="label">Set as default address</label>
      </div>
      <div class="mt-1 mb-1">
        <Button
          text-transform="lowercase"
          button-class="btn-secondary"
          :button-class-disabled="spinner ? 'btn-disabled' : ''"
          @click="submit"
          ><div v-if="!spinner">add address</div>
          <div v-if="spinner" class="spinner">
            <ButtonLoadingSpinner></ButtonLoadingSpinner></div
        ></Button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
// import { mapState } from 'vuex'
import baseInput from '~/components/DefaultComponent/baseInput'
// import baseCheckBox from '~/components/DefaultComponent/baseCheckBox.vue'
import Button from '~/components/DefaultComponent/baseButton'
import NavBar from '~/components/DefaultComponent/navbar'
import Footer from '~/components/HomeComponent/Footer.vue'
import ButtonLoadingSpinner from '~/components/DefaultComponent/button-loading-spinner.vue'
export default {
  components: {
    NavBar,
    Footer,
    Button,
    baseInput,
    ButtonLoadingSpinner,
    // baseCheckBox,
  },

  middleware: ['checkUser'],

  //   async asyncData({ store, params }) {
  //     const { data } = await axios.get(
  //       `${process.env.baseUrl}/user-address/${params.id}/`,
  //       {
  //         headers: {
  //           Authorization: 'Token ' + store.state.signin.token,
  //         },
  //       }
  //     )
  //     return {
  //       address: data,
  //     }
  //   },

  data() {
    return {
      data: {
        address: '',
        town: '',
        region: '',
        phone: '',
        default: false,
      },
      spinner: false,
    }
  },

  methods: {
    async submit() {
      this.spinner = true
      const formData = new FormData()
      formData.append('default', this.data.default)
      formData.append('address', this.data.address)
      formData.append('region', this.data.region)
      formData.append('town', this.data.town)
      formData.append('phone', this.data.phone)

      try {
        await axios.post(`${process.env.baseUrl}/create-address/`, formData, {
          headers: {
            Authorization: 'Token ' + Cookies.get('token'),
          },
        })
        // location.reload()
        this.$router.go(-1)
      } catch (error) {
        console.log(error.response.data)
        this.spinner = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  padding: 0 10px;
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

.address,
.town,
.phone,
.region,
.default {
  margin-bottom: 15px;
}

.default {
  display: flex;
  align-items: center;
  .label {
    font-size: 1.5rem;
    margin-left: 0.8rem;
  }
}
</style>
