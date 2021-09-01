import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import appData from '../mixins/app-data'

Vue.use(Vuex)

export default new Vuex.Store({
  appData,
  state: {
    count: 0,
    length: 0,
    index: 0,
    collection: null,
    immagine: null,
  },
  mutations: {
    increment (state) {
      if (state.count < state.length - 1) {
        ++state.count
        // console.log('qui', state.count)
      } else {
        state.count = 0
        // console.log('qua', state.count)
      }
    },
    decrement (state) {
      if (state.count > 0) {
        state.count--
        // console.log('qui', state.count)
      } else {
        state.count = state.length - 1
        // console.log('qua', state.count)
      }
    },
    setArrayLength (state, length) {
      // console.log('length', length)
      state.length = length
    },
    setCounter (state, index) {
      // console.log('index', index)
      state.count = index
    },
    setCollection (state, collection) {
      console.log('collection', collection)
      state.collection = collection
    },
    setImage (state, immagine) {
      state.immagine = immagine
    },
  },
  actions: {
    // setActiveProject ({ commit }, id) {
    //   return commit('SET_ACTIVE_PROJECT', id)
    // },
    previous ({ commit }) {
      return commit('decrement')
    },
    next ({ commit }) {
      return commit('increment')
    },
    setArrayLength ({ commit }, length) {
      return commit('setArrayLength', length)
    },
    setCounter ({ commit }, index) {
      return commit('setCounter', index)
    },
    retrieveData ({ commit }, item) {
      const response = new Promise((resolve, reject) => {
        try {
          const { data } = axios.get(`/wp/v2/${item}`)
          if (item === 'collection') {
            // console.log(this)
            return commit('setCollection', data)
          }
          if (item === 'immagine') {
            return commit('setImage', data)
          }
          resolve(data)
        } catch (err) {
          reject(err)
        }
      })
      console.log(response)
    },
  },
})
