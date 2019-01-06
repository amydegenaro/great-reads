import React from 'react'

const SearchResults = props => {
  return (
    <div>
      {
        props.results.map((result, idx) => {
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
