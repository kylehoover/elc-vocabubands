import { CLEAR_LIST_DATA_WITH_CHANGES, CLEAR_ROWS_DONE, DELETE_LIST_CHANGES, FETCH_ALL_LISTS, FETCH_LIST_CHANGES, FETCH_LIST_DATA,
         LOAD_ALL_LISTS, LOAD_LIST_CHANGES, LOAD_LIST_DATA, LOAD_LIST_DATA_WITH_CHANGES, ROW_DONE, SAVE_LIST_CHANGES, SET_LIST_TYPE,
         TOGGLE_LIST_DATA, UPDATE_BUILDING_WORDS, UPDATE_DEFINITION, UPDATE_LIST, UPDATE_SUPPORT_WORDS, UPDATE_WORD } from './TYPES'

export const clearListDataWithChanges = () => ({
  type: CLEAR_LIST_DATA_WITH_CHANGES
})

export const clearRowsDone = () => ({
  type: CLEAR_ROWS_DONE
})

export const deleteListChanges = () => ({
  type: DELETE_LIST_CHANGES
})

export const fetchAllLists = (listType) => ({
  type: FETCH_ALL_LISTS,
  listType
})

export const fetchListChanges = () => ({
  type: FETCH_LIST_CHANGES
})

export const fetchListData = (id) => ({
  type: FETCH_LIST_DATA,
  id
})

export const loadAllLists = (data) => ({
  type: LOAD_ALL_LISTS,
  data
})

export const loadListChanges = (data) => ({
  type: LOAD_LIST_CHANGES,
  data
})

export const loadListData = (data) => ({
  type: LOAD_LIST_DATA,
  data
})

export const loadListDataWithChanges = (data, changes) => ({
  type: LOAD_LIST_DATA_WITH_CHANGES,
  data,
  changes
})

export const rowDone = (id) => ({
  type: ROW_DONE,
  id
})

export const saveListChanges = () => ({
  type: SAVE_LIST_CHANGES
})

export const setListType = (listType) => ({
  type: SET_LIST_TYPE,
  listType
})

export const toggleListData = () => ({
  type: TOGGLE_LIST_DATA
})

export const updateBuildingWords = (index, value) => ({
  type: UPDATE_BUILDING_WORDS,
  index,
  value
})

export const updateDefinition = (index, value) => ({
  type: UPDATE_DEFINITION,
  index,
  value
})

export const updateList = () => ({
  type: UPDATE_LIST
})

export const updateSupportWords = (index, value) => ({
  type: UPDATE_SUPPORT_WORDS,
  index,
  value
})

export const updateWord = (index, value) => ({
  type: UPDATE_WORD,
  index,
  value
})
