import React from 'react'
import {filterAndSort} from '../utilityFunctions'

import SortButtons from './SortButtons'
import FilterOptions from './FilterOptions'
import SearchResults from './SearchResults'

const SearchView = props => {
  return (
    <div>
      <SortButtons handleSort={props.handleSort} />
      <FilterOptions
        handleChange={props.handleChange}
        results={props.results}
      />
      <SearchResults
        results={filterAndSort(props.results, props.state)}
        selectBook={props.selectBook}
      />
    </div>
  )
}

export default SearchView
