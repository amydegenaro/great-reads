import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SearchBox from './components/searchBox'
import SearchResults from './components/searchResults'
import SingleBook from './components/singleBook'

const Main = () => {
  return (
    <div>
      <h2>GreatReads</h2>
      <SearchBox />
      <Switch>
        <Route path="/:id" component={SingleBook} />
        <Route component={SearchResults} />
      </Switch>
    </div>
  )
}

export default Main

//possibly unnecessary
