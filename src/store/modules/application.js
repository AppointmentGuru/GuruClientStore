import { MUTATION_REGISTRY } from '../mutations'
import moment from 'moment'
import {
  FETCH_APPOINTMENTS_ACTION
} from '../actions'

export default {
  MUTATION_REGISTRY,
  state: {
    activeDate: moment().format('YYYY-MM-DD'),
    activeDateRange: {
      'fromDate': moment().startOf('month').format('YYYY-MM-DD'),
      'toDate': moment().endOf('month').format('YYYY-MM-DD')
    }
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
