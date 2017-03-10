import mixins from '@/store/mixins'
// import moment from 'moment'
import { assert, expect } from 'chai'

describe('Mixins:', () => {
  describe('gStoreGetAppointmentById', () => {
    let mockApps = [ {id: 1}, {id: 2}, {id: 3}, {id: 4} ]

    it('Gets appointment by id', () => {
      let result = mixins.methods.gStoreGetAppointmentById(mockApps, 3)
      expect(result).to.deep.equal({id: 3})
    })
    it('Returns -1 if no match found', () => {
      let result = mixins.methods.gStoreGetAppointmentById(mockApps, 5)
      assert.equal(undefined, result)
    })
  })
  describe('gStoreGetAppointmentsByDay', () => {
    let mockApps = [
      {start_time: '2017-03-10T13:46:29+02:00'},
      {start_time: '2017-03-11T13:46:29+02:00'},
      {start_time: '2017-03-10T13:47:29+02:00'},
      {start_time: '2017-03-13T13:46:29+02:00'},
      {start_time: '2017-04-10T13:46:29+02:00'}
    ]
    it('Fetchs all appointments on a specific day', () => {
      let result = mixins.methods.gStoreGetAppointmentsByDay(mockApps, '2017-03-10')
      assert.equal(result.length, 2)
    })
    it('Returns an empty list if none found', () => {
      let result = mixins.methods.gStoreGetAppointmentsByDay(mockApps, '2018-03-10')
      assert.equal(result.length, 0)
    })
  })
  describe('gStoreGetAppointmentsByStatus', () => {
    let mockApps = [
      {status: 'N'},
      {status: 'C'},
      {status: 'C'},
      {status: 'PR'},
      {status: 'I'}
    ]
    it('Returns all items matching a given array of statuses', () => {
      let result = mixins.methods.gStoreGetAppointmentsByStatus(mockApps, ['C', 'I'])
      assert.equal(result.length, 3)
    })
  })
})
