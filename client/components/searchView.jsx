import React from 'react'
import {filterAndSort} from '../utilityFunctions'

import SortButtons from './SortButtons'
import FilterOptions from './FilterOptions'
import SearchResults from './SearchResults'

const SearchView = props => {
  return (
    <div id='search'>
      <FilterOptions
        handleChange={props.handleChange}
        clearFilters={props.clearFilters}
        results={props.results}
      />
      <div id='main'>
        <SortButtons handleSort={props.handleSort} />
        <SearchResults
          results={filterAndSort(props.results, props.state)}
          selectBook={props.selectBook}
        />
      </div>
    </div>
  )
}

export default SearchView
