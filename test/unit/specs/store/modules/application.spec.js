// import Vue from 'vue'
// import Hello from '@/store/Hello'
/* eslin-disable no-unused-vars */
import store from '@/store/GuruClientStore'
import moment from 'moment'
import { assert } from 'chai'

// todo: work out how to mock moment
/*
var date = new Date(2013, 3, 1)
clock = sinon.useFakeTimers(date.getTime())
works going forward, but not for the store which was
already created by the import ...
*/
describe('base state: Application', () => {
  it('Should set activeDate to today', () => {
    assert.equal(store.state.application.activeDate, moment().format('YYYY-MM-DD'))
  })
  it('Should set activeDateRange to this month', () => {
    let range = store.state.application.activeDateRange
    assert.equal(range.fromDate, moment().startOf('month').format('YYYY-MM-DD'))
    assert.equal(range.toDate, moment().endOf('month').format('YYYY-MM-DD'))
  })
})
