import axios from 'axios'

// application validations:
if (!process.env.API_ROOT) {
  console.warn('No API route defined. Please set API route in config/dev.env.js')
}

let http = axios.create({
  baseURL: process.env.API_ROOT,
  headers: {
    'Content-Type': 'application/json'
  }
})

http.interceptors.request.use(
  function (config) {
    let token = window.localStorage.getItem('appointmentguru_token')
    let falseyValues = [null, false, '', 'null', undefined]
    if (token &&
        falseyValues.indexOf(token) === -1) {
      config.headers['Authorization'] = `Token ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  })

http.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    /* let isNotAuthenticated = error.response.status === 401
    if (isNotAuthenticated) {
      store.commit(AUTHENITCATION_EXCEPTION, error)
    } */
    return Promise.reject(error)
  })

const RESOURCES = {
  login: 'api/auth/login',
  practitioner: 'api/practitioners',
  appointment: 'api/v2/client/appointments'
}

export default {
  getUrl (url) {
    return http.get(url)
  },
  get (resource, id) {
    let url = `${RESOURCES[resource]}/`
    if (id) {
      url = `${url}${id}/`
    }
    return http.get(url)
  },
  update (resource, id, data) {
    let url = `${RESOURCES[resource]}/${id}/`
    return http.patch(url, data)
  },
  create (resource, data, extraPath) {
    let url = `${RESOURCES[resource]}/`
    if (extraPath) {
      url = `${url}${extraPath}`
    }
    return http.post(url, data)
  },
  delete (resource, id) {
    let url = `${RESOURCES[resource]}/${id}/`
    return http.delete(url)
  },
  login (data, asPractitioner) {
    let url = 'api/auth/login/'
    if (asPractitioner) {
      data['scope'] = 'practitioner'
    }
    return http.post(url, data)
  }
}
