export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'a2-test-task',
    htmlAttrs: {
      lang: 'en'
    },
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

  ssr: true,
  loading: true,
    server: {
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || 3000
    },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/index.scss',
  ],

styleResources: {
    sass: [],
    scss: [
        '@/assets/scss/_base/_variables.scss',
        // '@/assets/scss/_mixins/*.scss',
    ],
    less: [],
},

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    ['@nuxtjs/axios'],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
axios: {
  prefix: '/api',
  proxy: true,
},

proxy: {
    '/api': {
        target: 'https://api.av100.ru',
        pathRewrite: { '^/api/': '' },
        headers: { 'X-Api-Key': '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9' },
        //logLevel: 'debug',
    },
},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
