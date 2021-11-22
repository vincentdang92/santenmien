const redirectSSL =  require( 'redirect-ssl' );
module.exports =  {
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
  server: {
    port: 9999, // default: 3000
    host: 'local.nhanhoa.com',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/home.css',
    '@/assets/scss/bantenmien.css',
    '@/assets/scss/user.css',
    '@/assets/scss/tenmienraoban.css',
    '@/assets/scss/_style.scss',
  ],
  publicRuntimeConfig: {
    baseURL: process.env.NODE_ENV === 'production' ? 'https://santenmien.nhanhoa.com' : 'http://local.nhanhoa.com:9999',
    logoutURL: 'https://id.nhanhoa.com/logout.html',
    loginURL: 'https://id.nhanhoa.com',
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/BootstrapIcon'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    
  ],
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'domain-for-sale-custom',
        path: '/ten-mien-rao-ban.html',
        component: resolve(__dirname, 'pages/domain-for-sale/index.vue')
      });
      routes.push({
        name: 'request-domain-custom',
        path: '/mua-ten-mien.html',
        component: resolve(__dirname, 'pages/request-domain/index.vue')
      });
      routes.push({
        name: 'sell-domain-custom',
        path: '/dang-ban-ten-mien.html',
        component: resolve(__dirname, 'pages/sell-domain/index.vue')
      });
      routes.push({
        name: 'chi-tiet-ten-mien.html',
        path: '/chi-tiet-ten-mien.html',
        component: resolve(__dirname, 'pages/domain-for-sale-detail/index.vue')
      });
      routes.push({
        name: 'tai-khoan-custom',
        path: '/tai-khoan.html',
        component: resolve(__dirname, 'pages/accounts/index.vue')
      });
      routes.push({
        name: 'dang-nhap',
        path: '/dang-nhap.html',
        component: resolve(__dirname, 'pages/login/index.vue')
      });
      routes.push({
        name: 'dang-ky',
        path: '/dang-ky.html',
        component: resolve(__dirname, 'pages/register/index.vue')
      });
      routes.push({
        name: 'chinh-sach',
        path: '/chinh-sach.html',
        component: resolve(__dirname, 'pages/policy/index.vue')
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
    // '@nuxtjs/auth-next'
    ['cookie-universal-nuxt', { parseJSON: false }],
    
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   proxy: true, // Can be also an object with default options
  //   //baseURL:'http://api.themedemo.xyz/'
  // },
  // proxy:{
  //   //'/api/' :'https://firebase.blog4share.com/wp-json/jwt-auth/v1'
  //   '/api-login' :'https://id.nhanhoa.com/login/do'
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  middleware: ['user-agent'],
  serverMiddleware: [
    '~/middleware/redirect',
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production'
     }),

  ],
  styleResources: {
    scss: [
      '~/assets/scss/_variables.scss',
    ]
  },
  /*
  ** optimizedImages
  */
  optimizedImages: {
    //optimizeImages: true
  },
  // auth: {
    
  //   strategies: {
  //     local: {
  //       scheme: 'refresh',
        
  //       endpoints: {
  //         login: { url: 'https://id.nhanhoa', method: 'post' },
  //         refresh: false,
  //         user: false,
  //         logout: false
  //       },
  //       // autoLogout: false
  //     }
  //   },
    
  // },
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
