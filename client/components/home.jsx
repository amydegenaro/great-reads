import React from 'react'
import SearchBox from './SearchBox'

const Home = props => {
  return (
    <div id="home">
      <h2>GreatReads.</h2>
      <SearchBox
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        title={props.title}
      />
    </div>
  )
}

export default Home
