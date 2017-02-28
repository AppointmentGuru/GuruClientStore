import Vue from 'vue'
import Vuex from 'vuex'
import {API} from './API'

Vue.use(Vuex)
import application from './modules/application'
import appointment from './modules/appointment'
import practitioner from './modules/practitioner'

export default new Vuex.Store({
  API,
  modules: {
    application: application,
    appointments: appointment,
    practitioner: practitioner
  }
})
