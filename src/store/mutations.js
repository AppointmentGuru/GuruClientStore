export const MUTATION_REGISTRY = {
  // {module}_{action}_{target}
  // MODULE: APPLICATION
  'APPLICATION_SET_DATERANGE': {
    name: 'APPLICATION_SET_DATERANGE',
    description: 'Set the active daterange'
  },
  // MODULE: APPOINTMENT:
  'APPPOINTMENT_SET_APPOINTMENTS': {
    name: 'APPPOINTMENT_SET_APPOINTMENTS',
    description: 'Sets the list of appointments to the provided argument'
  },
  // MODULE: PRACTITIONER
  'PRACTITIONER_SET_PRACTITIONER': {
    name: 'PRACTITIONER_SET_PRACTITIONER',
    description: 'Set the current practitioner'
  }
}

export const ACTION_REGISTRY = {
  'SET_DATE_RANGE_ACTION': {
    name: 'SET_DATE_RANGE_ACTION',
    description: 'Set the active daterange and fetch appointments in that daterange',
    requiresData: true,
    defaultData: { fromDate: '2017-02-01', toDate: '2017-02-28' }
  },
  'FETCH_APPOINTMENTS_ACTION': {
    name: 'FETCH_APPOINTMENTS_ACTION',
    description: 'Fetch appointments within the current selected range'
  },
  'FETCH_PRACTITIONER_ACTION': {
    name: 'FETCH_PRACTITIONER_ACTION',
    description: 'Fetch the practitioner with $practitionerId',
    requiresData: true,
    defaultData: 1
  },
  'CREATE_APPOINTMENT_ACTION': {
    name: 'CREATE_APPOINTMENT_ACTION',
    description: 'Create an appointment',
    requiresData: true,
    defaultData: {
      'start_time': '2017-03-14T05:00:00.000Z',
      'end_time': '2017-03-14T05:30:00.000Z',
      'product': 16,
      'full_name': 'Christo Crampton',
      'contact_phone': '+27832566533',
      'email': 'info@38.co.za',
      'practitioner': 1
    }
  }
}
