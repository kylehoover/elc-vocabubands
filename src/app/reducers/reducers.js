import { FETCH_FAILED, LOAD_LIST_DATA, ROW_DONE } from '../actions/actionTypes'

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_LIST_DATA:
      return {
        ...state,
        currentList: action.id,
        listData: [
          ...action.data
        ],
        rowsDone: []
      }
    case ROW_DONE:
      const index = state.rowsDone.indexOf(action.id)
      if (index === -1) {
        return {
          ...state,
          rowsDone: [
            ...state.rowsDone,
            action.id
          ]
        }
      }
      return {
        ...state,
        rowsDone: [
          ...state.rowsDone.slice(0, index),
          ...state.rowsDone.slice(index + 1)
        ]
      }
    case FETCH_FAILED:
      return {
        ...state,
        currentList: 0,
        error: action.err
      }
    default:
      return state
  }
}

export default reducer
