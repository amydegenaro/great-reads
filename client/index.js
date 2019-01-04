import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
// import {BrowserRouter} from 'react-router-dom'
import store from './store'
import Home from './components/home'

// ReactDOM.render(
//   <Provider store={store}>
//     {/* <BrowserRouter> */}
//       <App />
//     {/* </BrowserRouter> */}
//   </Provider>,
//   document.getElementById('app')
// )

ReactDOM.render(
  <Home />,
  document.getElementById('app')
)
