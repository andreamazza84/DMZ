import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    count: 0,
  },
  mutations: {
    increment (state) {
      state.count++
    },
  },
  // actions: {
  //   menuToggle( {commit} ){
  //     return commit('SET_DRAWER')
  //   },
  //   snackToggle( {commit} ){
  //     return commit('SET_SNACKBAR')
  //   },
  //   switchToggle( {commit} ){
  //     return commit('SET_SWITCH')
  //   }
  // },
  // modules: {
  // }
})
