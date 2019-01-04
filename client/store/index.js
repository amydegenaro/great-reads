import {createStore, combineReducers, applyMiddleware} from 'redux'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import search from './search'

const reducer = combineReducers({
  search
})

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggingMiddleware
  )
)

export default store
export * from './search'
