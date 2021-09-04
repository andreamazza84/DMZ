import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import appData from '@/mixins/app-data'

Vue.use(Vuex)

export default new Vuex.Store({
  appData,
  state: {
    count: 0,
    length: 0,
    index: 0,
    raccolta: [],
    immagine: [],
    currentGallery: [],
  },
  mutations: {
    increment (state) {
      if (state.count < state.length - 1) {
        ++state.count
      } else {
        state.count = 0
      }
    },
    decrement (state) {
      if (state.count > 0) {
        state.count--
      } else {
        state.count = state.length - 1
      }
    },
    setArrayLength (state, length) {
      state.length = length
    },
    setCounter (state, index) {
      state.count = index
    },
    setCollection (state, data) {
      // console.log('raccolta', data)
      state.raccolta = data
    },
    setImage (state, data) {
      // console.log('immagine', data)
      state.immagine = data
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
    retrieveData({ commit }, item){
      return new Promise(async (resolve, reject) =>{
        try{
          const { data } = await axios.get(`/wp/v2/${item}`);
          if(item === "raccolta"){ return commit('setCollection', data) }
          if(item === "immagine"){ return commit('setImage', data) }
          resolve(data);
        } catch(error) {
          reject(error);
        }
      });
    },
  },
})
