export default  {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sàn Tên Miền',
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
    '@/assets/scss/home.css',
    '@/assets/scss/bantenmien.css',
    '@/assets/scss/user.css',
    '@/assets/scss/tenmienraoban.css',
    '@/assets/scss/_style.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    
  ],
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'find-domain-custom',
        path: '/tim-kiem-ten-mien.html',
        component: resolve(__dirname, 'pages/find-domain/index.vue')
      });
      routes.push({
        name: 'buy-domain-custom',
        path: '/mua-ten-mien.html',
        component: resolve(__dirname, 'pages/buy-domain/index.vue')
      });
      routes.push({
        name: 'sell-domain-custom',
        path: '/ban-ten-mien.html',
        component: resolve(__dirname, 'pages/sell-domain/index.vue')
      });
      
      
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next'
    
    
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [ '@vueform/slider'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },

    loaders: {
        less: { javascriptEnabled: true }
    },

    babel: {
        presets ({ isServer }, [ preset, options ]) {
            return [
                [
                    preset, {
                    ...options,
                    targets: isServer ? { node: 'current' } : { android: '4', ie: '9' }
                    }
                ]
            ]
        }
    },
    publicPath: 'santenmien/',
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        preserveLineBreaks: false,
        collapseWhitespace: true
      }
    },
}
}
