import Vue from 'vue'
import Vuex from 'vuex'
import {API} from './API'

Vue.use(Vuex)

export default new Vuex.Store({
  API,
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
