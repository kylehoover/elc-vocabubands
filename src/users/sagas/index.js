'use strict'

import watchAddNewUser from './addNewUser'
import watchDeleteUser from './deleteUser'
import watchFetchUser from './fetchUser'
import watchFetchUsers from './fetchUsers'
import watchLoadUserById from './loadUserById'
import watchUpdateUser from './updateUser'

export default function * rootSaga () {
  yield [
    watchAddNewUser(),
    watchDeleteUser(),
    watchFetchUser(),
    watchFetchUsers(),
    watchLoadUserById(),
    watchUpdateUser()
  ]
}
