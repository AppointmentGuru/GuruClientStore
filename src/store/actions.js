import {API} from './API'

import { MUTATION_REGISTRY } from './mutations'

export const FETCH_APPOINTMENTS_ACTION = ({ commit }, dateRange) => {
  if (!dateRange) {
    dateRange = {
      'fromDate': '2017-02-01',
      'toDate': '2017-02-28'
    }
  }
  const url = `api/v2/client/appointments/?after_utc=${dateRange.fromDate}&before_utc=${dateRange.toDate}`
  return API.getUrl(url)
    .then((response) => {
      commit(MUTATION_REGISTRY.APPPOINTMENT_SET_APPOINTMENTS.name, response.data.results)
    })
}

/* practitioners */

export const FETCH_PRACTITIONER_ACTION = ({ commit }, practitionerId) => {
  console.log(practitionerId)
  return API.get('practitioners', practitionerId)
    .then((response) => {
      commit(MUTATION_REGISTRY.PRACTITIONER_SET_PRACTITIONER.name, response.data)
    })
}
