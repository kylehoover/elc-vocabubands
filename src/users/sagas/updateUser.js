'use strict'

import { takeEvery } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'
import { updateExistingUser } from './queries'
import { updateUsersList, sort } from '../actions/actionCreators'
import { UPDATE_USER } from '../actions/TYPES'

function * updateUser (action) {
  const state = yield select()
  const user = state.user

  if (user.first_name === '') {
    action.e.preventDefault()
    toastr.warning('WARNING', 'The First Name field is required')
  } else if (user.last_name === '') {
    action.e.preventDefault()
    toastr.warning('WARNING', 'The Last Name field is required')
  } else if (state.isAdmin && user.net_id === '') {
    action.e.preventDefault()
    toastr.warning('WARNING', 'The Net ID field is required')
  } else if (user.level === '') {
    action.e.preventDefault()
    toastr.warning('WARNING', 'The Enrollment Level field is required')
  } else {
    try {
      const response = yield call(updateExistingUser, user)
      yield put(updateUsersList(response.data.data.updateUser))
      yield put(sort())

      if (state.isAdmin) {
        toastr.success('SUCCESS', `${user.first_name} has been updated`)
      } else {
        toastr.success('SUCCESS', 'Your information has been updated')
      }
    } catch (err) {
      console.log(err)
      toastr.error('ERROR', `Something went wrong while updating ${user.first_name} ${user.last_name}. Check the console for error messages.`, { timeOut: 0 })
    }
  }
}

export default function * watchUpdateUser () {
  yield * takeEvery(UPDATE_USER, updateUser)
}
