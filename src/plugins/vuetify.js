// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        // primary: '#f09f54',
        // offblack: '#151515',
      },
      dark: {
        primary: '#6c99d1',
        secondary: '#1e1e1e',
        offblack: '#1e1e1e',
      },
    },
  },
})
