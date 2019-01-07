import {createStore, applyMiddleware} from 'redux'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

// INITIAL STORE STATE
const initialState = {
  searchResults: [],
  selectedBook: {}
}

// ACTION TYPES
const GOT_RESULTS_BY_TITLE = 'GOT_RESULTS_BY_TITLE'
const GOT_BOOK_DETAILS = 'GOT_BOOK_DETAILS'

// ACTION CREATORS
const gotResultsByTitle = list => ({
  type: GOT_RESULTS_BY_TITLE,
  list
})

const gotBookDetails = details => ({
  type: GOT_BOOK_DETAILS,
  details
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

export const getBookDetails = book => async dispatch => {
  try {
    const {openLibID, worksID} = book
    const {data} = await axios.post('/api/book/', {openLibID, worksID})
    dispatch(gotBookDetails(data))
  } catch (err) {
    console.error(err)
  }
}

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_RESULTS_BY_TITLE:
      return {...state, searchResults: action.list}
    case GOT_BOOK_DETAILS:
      return {...state, selectedBook: action.details}
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
