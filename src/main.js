import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import appData from './mixins/app-data'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import https from 'https'

Vue.mixin(appData)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/**
 * Disable only in development mode
 */
// if (process.env.NODE_ENV === 'development') {
//   const httpsAgent = new https.Agent({
//     rejectUnauthorized: false,
//   })
//   axios.defaults.options = httpsAgent
//   // eslint-disable-next-line no-console
//   console.log(process.env.NODE_ENV, 'RejectUnauthorized is disabled.')
// }

// Vue.axios.defaults.baseURL = 'https://davidemancinizanchi.com/backoffice/wp-json'
// Vue.axios.defaults.headers = { ' Access-Control-Allow-Origin': '*' }
Vue.axios.defaults.baseURL = 'http://localhost:8880/wp-json'

// https://davidemancinizanchi.com/backoffice/wp-json/wp/v2/collection
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
