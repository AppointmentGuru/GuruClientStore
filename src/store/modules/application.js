import { MUTATION_REGISTRY } from '../mutations'

import {
  FETCH_APPOINTMENTS_ACTION
} from '../actions'

export default {
  MUTATION_REGISTRY,
  state: {
    activeDate: null,
    activeDateRange: null
  },
  mutations: {
    // example: this.commit(CLIENTS_LOADED, [])
    [MUTATION_REGISTRY.APPLICATION_SET_DATERANGE.name] (state, appointments) {
      state.appointments = appointments
    }
  },
  actions: {
    FETCH_APPOINTMENTS_ACTION
  }
}
