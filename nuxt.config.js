export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'revolvemart',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        href:
          'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500&family=Mulish:wght@400;500;600;700&family=Old+Standard+TT:wght@400;700&family=Open+Sans:wght@400;600&family=Spectral:ital@1&display=swap',
        rel: 'stylesheet',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/variables.scss'],

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/fontawesome.js',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
