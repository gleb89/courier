import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - curertwo',
    title: 'curertwo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/fontawesome',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  fontawesome:{
    component:'fa',
    icons:{
      solid:true,
      brands:true
    },
  },
  proxy: {
    // Simple proxy
    "/api/": {
      target: "https://giftcity.kz/api/v1",
      pathRewrite: { "^/api/": "" },
      changeOrigin: true
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa


  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  pwa: {
    manifest: {
      name: 'Курьер && Admin',
      short_name: 'Курьер && Admin',
      lang: 'ru',
      display: 'standalone',
    },
  },
  server: {
    port: 80 // default: 3000
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
