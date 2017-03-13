import {API} from './API'

import { MUTATION_REGISTRY } from './mutations'

function validateModel (obj, requiredFields) {
  let actualFields = Object.keys(obj)
  for (let field of requiredFields) {
    if (actualFields.indexOf(field) === -1) {
      console.warn(`${field} is required`)
    }
  }
}

export const SET_DATE_RANGE_ACTION = ({ commit, dispatch }, dateRange) => {
  commit(MUTATION_REGISTRY.APPLICATION_SET_DATERANGE.name, dateRange)
  return dispatch('FETCH_APPOINTMENTS_ACTION')
}

export const FETCH_APPOINTMENTS_ACTION = ({ commit, state }, dateRange) => {
  if (!dateRange) {
    dateRange = state.activeDateRange
  }
  const url = `api/v2/client/appointments/?after_utc=${dateRange.fromDate}&before_utc=${dateRange.toDate}`
  return API.getUrl(url)
    .then((response) => {
      commit(MUTATION_REGISTRY.APPPOINTMENT_SET_APPOINTMENTS.name, response.data.results)
    })
}

/**
 *
 let app = {
  "start_time": start_datetime,
  "end_time": end_datetime,
  "practitioner": this.practitioner.id,
  // maybe just use client_id?
  "full_name": this.state.me.first_name + " " + this.state.me.last_name,
  "contact_phone": this.state.me.phone_number,
  "contact_email": this.state.me.email,
  "product": this.state.selectedProduct.id,
  "source": "client-mobile"
}
 */
export const CREATE_APPOINTMENT_ACTION = ({ commit }, appointment) => {
  validateModel(appointment, [
    'start_time', 'end_time', 'practitioner',
    'full_name', 'contact_phone', 'contact_email',
    'product', 'source'])
  return API.create('appointment', appointment)
}

/* practitioners */

export const FETCH_PRACTITIONER_ACTION = ({ commit }, practitionerId) => {
  console.log(practitionerId)
  return API.get('practitioners', practitionerId)
    .then((response) => {
      commit(MUTATION_REGISTRY.PRACTITIONER_SET_PRACTITIONER.name, response.data)
    })
}
