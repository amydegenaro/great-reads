import React from 'react'

const SearchBox = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label name="title">Find a book</label>
      <input name="title" value={props.title} onChange={props.handleChange} placeholder="Search by title"/>
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBox
