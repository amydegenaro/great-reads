import React from 'react'

const SearchBox = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input name="title" value={props.title} onChange={props.handleChange} placeholder="Search by title"/>
      <button type="submit">Find Books</button>
    </form>
  )
}

export default SearchBox
