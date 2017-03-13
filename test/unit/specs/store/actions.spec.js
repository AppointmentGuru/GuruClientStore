import store from '@/store/GuruClientStore'
import {API} from '@/store/API'
import { assert, expect } from 'chai'
import moment from 'moment'

import { MUTATION_REGISTRY } from '@/store/mutations'

import {
  SET_DATE_RANGE_ACTION,
  FETCH_APPOINTMENTS_ACTION,
  CREATE_APPOINTMENT_ACTION,
  FETCH_PRACTITIONER_ACTION
} from '@/store/actions'

// const noOp = (mutation, payload) => {}
const testAction = (action, payload, state, expectedMutations, expectedActions, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]
    expect(mutation.type).to.equal(type)
    if (payload) {
      expect(mutation.payload).to.deep.equal(payload)
    }
    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }
  // mock action
  const dispatch = (type, payload) => {
    const action = expectedActions[count]
    // console.log(`dispatch(${type}, ${payload})`)
    expect(action.type).to.equal(type)
    if (payload) {
      expect(action.payload).to.deep.equal(payload)
    }
    count++
    if (count >= expectedActions.length) {
      done()
    }
  }

  // call the action with mocked store and arguments
  action({ commit, dispatch, state }, payload)

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}

describe('Application:actions', () => {
  var MockAdapter = require('axios-mock-adapter')
  // This sets the mock adapter on the default instance
  var mock = new MockAdapter(API.axios)

  afterEach(() => {
    mock.reset()
  })

  it('Fetches appointments for the active range if no range is specified', done => {
    let range = store.state.application.activeDateRange
    let expectedUrl = `/api/v2/client/appointments/?after_utc=${range.fromDate}&before_utc=${range.toDate}`
    let mockResponse = { results: [{foo: 'bar'}] }
    mock.onGet(expectedUrl).reply(200, mockResponse)

    FETCH_APPOINTMENTS_ACTION({
      commit: (mutation, payload) => {
        assert.equal('APPPOINTMENT_SET_APPOINTMENTS', mutation)
        expect(payload).to.deep.equal(mockResponse.results)
        done()
      },
      state: store.state
    })
    /* testAction(FETCH_APPOINTMENTS_ACTION, null, store.state, [
      { type: MUTATION_REGISTRY.APPPOINTMENT_SET_APPOINTMENTS.name }
    ]) */
  })

  describe('SET_DATE_RANGE_ACTION', () => {
    it('Sets the daterange', done => {
      let payload = {
        fromDate: '2017-02-20',
        toDate: '2017-02-25'
      }
      let expectedMutations = [
        {
          type: MUTATION_REGISTRY.APPLICATION_SET_DATERANGE.name,
          payload: payload
        }
      ]
      let expectedActions = [
        { type: 'FETCH_APPOINTMENTS_ACTION' }
      ]
      testAction(
          SET_DATE_RANGE_ACTION,
          payload,
          store.state,
          expectedMutations,
          expectedActions, done)

      expect(store.state.application.activeDateRange).to.deep.equal(payload)
    })
    it('then it re-fetches appointments', () => {})
  })

  it('Can create an appointment', done => {
    let mockApp = {
      'start_time': moment().format(),
      'end_time': moment().add(30, 'minutes').format(),
      'practitioner': 1,
      'full_name': 'Joe Soap',
      'contact_phone': '+27831233456',
      'contact_email': 'joe@soap.com',
      'product': 1,
      'source': 'unit-test'
    }
    let expectedUrl = '/api/appointments/'
    let mockResponse = { results: [mockApp] }
    mock.onPost(expectedUrl).reply(200, mockResponse)
    CREATE_APPOINTMENT_ACTION({commit: null}, mockApp)
      .then((response) => {
        done()
      })
  })

  describe('FETCH_PRACTITIONER_ACTION', () => {
    it('Fetches a practitioner from the service', done => {
      let mockPractitionerId = 1
      let mockResponse = { practitioner: mockPractitionerId }
      let expectedMutations = [
        {
          type: MUTATION_REGISTRY.PRACTITIONER_SET_PRACTITIONER.name,
          payload: mockResponse
        }
      ]
      let expectedUrl = '/api/practitioners/' + mockPractitionerId + '/'
      mock.onGet(expectedUrl).reply(200, mockResponse)
      testAction(
        FETCH_PRACTITIONER_ACTION,
        mockPractitionerId,
        store.state,
        expectedMutations,
        [], done)

      // expect(store.state.practitioner.practitioner).to.deep.equal(mockResponse)
    })
  })
})
