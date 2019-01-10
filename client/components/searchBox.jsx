import React from 'react'

const SearchBox = props => {
  return (
    <form onSubmit={props.handleSubmit} className="search-form">
      <input name="title" className="search-box" value={props.title} onChange={props.handleChange} placeholder="search by title"/>
      <button type="submit" className="btn btn-search">Find Books</button>
    </form>
  )
}

export default SearchBox
