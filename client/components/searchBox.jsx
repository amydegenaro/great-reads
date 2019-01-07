import React from 'react'

const SearchBox = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label name="title">Search by Title</label>
      <input name="title" value={props.title} onChange={props.handleChange} placeholder="Book title"/>
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBox
