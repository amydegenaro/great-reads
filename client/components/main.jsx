import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SearchBox from './searchBox'
import SearchResults from './searchResults'
import SingleBook from './singleBook'

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
