import React from 'react'

const SearchResults = props => {
  return (
    props.results.map(result => {
      return (
        <div key={result.openLibID}>
          <p>TEST ENTRY</p>
          <h4>{result.title}</h4>
          <p>{result.author}</p>
        </div>
      )
    })
  )
}

export default SearchResults
