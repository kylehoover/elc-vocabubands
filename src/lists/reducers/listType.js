'use strict'

import { LOAD_ALL_LISTS } from '../actions/TYPES'

const listType = (state = '', action) => {
  switch (action.type) {
    case LOAD_ALL_LISTS:
      return action.data.type
    default:
      return state
  }
}

export default listType
