<template>
  <div v-if="user_profile">
    <NavBar></NavBar>
    <div class="heading">Add a delivery note</div>
    <div class="form">
      <div class="container">
        <div class="name text-bold text-small">
          {{ user_profile.first_name }} {{ user_profile.last_name }}
        </div>
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

      <div class="note">
        <baseTextArea
          v-model="note"
          placeholder="Enter your delivery note"
          label="Note:"
        ></baseTextArea>
      </div>
      <div class="mt-1 mb-1">
        <Button
          text-transform="lowercase"
          button-class="btn-secondary"
          :disabled="spinner"
          :button-class-disabled="spinner ? 'btn-disabled' : ''"
          @click="submit"
          ><div v-if="!spinner">Add delivery instructions</div>
          <div v-if="spinner" class="spinner">
            <ButtonLoadingSpinner></ButtonLoadingSpinner></div
        ></Button>
      </div>
      <div v-if="shippingNote.note" class="container">
        <div class="note-header text-large mb-1 text-bold">
          Your Current Note
        </div>
        <div class="note text-0-4">{{ shippingNote.note }}</div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
import { mapState } from 'vuex'
// import baseInput from '~/components/DefaultComponent/baseInput'
import baseTextArea from '~/components/DefaultComponent/baseTextArea.vue'
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
    baseTextArea,
    ButtonLoadingSpinner,
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
    return {
      address: data,
      shippingNote: note.data,
    }
  },

  data() {
    return {
      note: '',
      spinner: false,
    }
  },

  computed: {
    ...mapState(['user_profile']),
  },

  methods: {
    async submit() {
      const formData = new FormData()

      formData.append('note', this.note)

      try {
        this.spinner = true
        await axios.put(`${process.env.baseUrl}/shipping-note/`, formData, {
          headers: {
            Authorization: 'Token ' + Cookies.get('token'),
          },
        })

        this.$router.go(-1)
      } catch (error) {
        console.log(error.response.data)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  padding: 0 10px;
}

.container {
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  position: relative;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
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

.note {
  margin-bottom: 15px;
}
</style>
