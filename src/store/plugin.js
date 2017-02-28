import store from './GuruClientStore'

export default {
  store,
  install (Vue, options) {
    Vue.prototype.$gurustore = store
  }
}
