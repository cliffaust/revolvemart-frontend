import Vue from 'vue'

import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
// import { ValidationObserver, extend } from 'vee-validate'
// import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules.umd'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', {
  ...required,
  message: 'This field is required',
})
