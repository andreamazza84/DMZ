import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import appData from './mixins/app-data'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.mixin(appData)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.axios.defaults.baseURL = 'https://davidemancinizanchi.com/backoffice/wp-json'
// https://davidemancinizanchi.com/backoffice/wp-json/wp/v2/collection
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
