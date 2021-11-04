import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - couriers-pwa',
    title: 'couriers-pwa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name :"apple-mobile-web-app-status-bar-style", content :"default"},
      {name :"theme-color", content :"#ffffff"},
      
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
  oneSignal: {
    init: {
    appId: "3b63f732-92ab-40f7-99ef-593572cee9ed",
    safari_web_id: "web.onesignal.auto.560021c2-877c-448b-9811-f001e7b5ec58",
    allowLocalhostAsSecureOrigin: true,
    welcomeNotification: {
      disable: false
    }
  }
 },



  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },

  proxy: {
    // Simple proxy
    "/api/": {
      target: "https://giftcity.kz/api/v1",
      pathRewrite: { "^/api/": "" },
      
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
