import { MUTATION_REGISTRY } from '../mutations'
import {
  CREATE_APPOINTMENT_ACTION,
  SET_DATE_RANGE_ACTION } from '../actions'

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
  actions: {
    CREATE_APPOINTMENT_ACTION,
    SET_DATE_RANGE_ACTION
  }
}
