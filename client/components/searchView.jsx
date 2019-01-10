import React from 'react'
import {filterAndSort} from '../utilityFunctions'

import SortButtons from './SortButtons'
import FilterOptions from './FilterOptions'
import SearchResults from './SearchResults'

const SearchView = props => {
  return (
    <div id="search">
      <FilterOptions
        handleChange={props.handleChange}
        clearFilters={props.clearFilters}
        results={props.results}
        author={props.state.author}
        tags={props.state.tags}
        year={props.state.year}
      />
      <div id="main">
        <SortButtons
          handleSort={props.handleSort}
          sort={props.state.sort}
          />
          {
            props.loading ?
            <p>Loading, please wait...</p>
            :
            <div>
              {
                props.foundResults !== false ?
                <SearchResults
                  results={filterAndSort(props.results, props.state)}
                  selectBook={props.selectBook}
                />
                :
                <p>No books found!</p>
              }
            </div>
          }
      </div>
    </div>
  )
}

export default SearchView
