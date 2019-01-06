import React from 'react'
import {sortAscending, sortDescending} from '../utilityFunctions'

const SearchResults = props => {
  let results = []

  switch (props.sort) {
    case 'year':
      results = sortAscending(props.results, props.sort)
      break;
    case 'editions':
      results = sortDescending(props.results, props.sort)
      break;
    default:
      results = props.results
      break;
  }

  return (
    <div>
      {
        results.map((result, idx) => {
          return (
            <div key={idx}>
              <h4>{result.title}</h4>
              <p>by {result.author || 'Unknown Author'}</p>
              <p>First published in {result.year}</p>
              <p>Editions: {result.editions}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default SearchResults
