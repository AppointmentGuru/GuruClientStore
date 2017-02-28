import { MUTATION_REGISTRY } from '../mutations'

import {
  FETCH_PRACTITIONER_ACTION
} from '../actions'

export default {
  MUTATION_REGISTRY,
  state: {
    practitioner: {}
  },
  mutations: {
    // example: this.commit(CLIENTS_LOADED, [])
    [MUTATION_REGISTRY.PRACTITIONER_SET_PRACTITIONER.name] (state, practitioner) {
      state.practitioner = practitioner
    }
  },
  actions: {
    FETCH_PRACTITIONER_ACTION
  }
}
