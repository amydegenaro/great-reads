import React from 'react'

const SearchResults = props => {
  return (
    <div id="results">
      {
        props.results.map((result, idx) => {
          return (
            <div key={idx} className="single-result">
              <h4 className="result-title" onClick={() => props.selectBook(result)}>{result.title}</h4>
              <h4>by {result.author}</h4>
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
