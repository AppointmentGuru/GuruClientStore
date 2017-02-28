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
  'FETCH_APPOINTMENTS_ACTION': {
    name: 'FETCH_APPOINTMENTS_ACTION',
    description: 'Fetch appointments within the current selected range'
  },
  'FETCH_PRACTITIONER_ACTION': {
    name: 'FETCH_PRACTITIONER_ACTION',
    description: 'Fetch the practitioner with $practitionerId',
    requiresData: true,
    defaultData: 1
  }
}
