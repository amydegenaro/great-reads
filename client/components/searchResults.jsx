import React from 'react'
import {connect} from 'react-redux'

const SearchResults = props => {
  return (
    <div>
      <h3>Results:</h3>
      <button>Sort by Title</button>
      <button>Sort by Author</button>
      <button>Sort by Year</button>

      {/* Filter ideas: remove unknown author */}

      {
        props.results.map((result, idx) => {
          return (
            <div key={idx}>
              <h4>{result.title}</h4>
              <p>by {result.author || 'Author Unknown'}</p>
              <p>{result.year}</p>
              <p>Editions: {result.editions}</p>
            </div>
          )
        })
      }
    </div>
  )
}

const mapState = state => ({
  results: state.search
})

export default connect(mapState)(SearchResults)
