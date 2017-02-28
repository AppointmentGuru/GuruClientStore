import { MUTATION_REGISTRY } from '../mutations'

export default {
  MUTATION_REGISTRY,
  state: {
    appointments: []
  },
  mutations: {
    // example: this.commit(CLIENTS_LOADED, [])
    [MUTATION_REGISTRY.APPPOINTMENT_SET_APPOINTMENTS.name] (state, appointments) {
      state.appointments = appointments
    }
  },
  actions: { }
}
