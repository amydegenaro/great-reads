import {createStore, applyMiddleware} from 'redux'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {generateTagList} from '../utilityFunctions'
import axios from 'axios'

// INITIAL STORE STATE
const initialState = {
  search: [],
  sort: '',
  tags: [],
  filtered: [],
  detail: {}
}

// ACTION TYPES
const GOT_RESULTS_BY_TITLE = 'GOT_RESULTS_BY_TITLE'

// ACTION CREATORS
const gotResultsByTitle = list => ({
  type: GOT_RESULTS_BY_TITLE,
  list
})

// THUNK CREATORS
export const getResultsByTitle = search => async dispatch => {
  try {
    const {data} = await axios.post('/api/search/title', {search})
    dispatch(gotResultsByTitle(data))
  } catch (err) {
    console.error(err)
  }
}

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_RESULTS_BY_TITLE:
      return {
        ...state,
        search: action.list,
        tags: generateTagList(action.list)
      }
    default:
      return state
  }
}

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggingMiddleware
  )
)

export default store
