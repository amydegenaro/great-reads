import React from 'react'

const FilterOptions = props => {
  return (
    <div>
      <p>Filter</p>
      <form>
        <label name='author'>Author</label>
        <select name='author' onChange={props.handleChange}>
          <option value=''>None</option>
          <option value='J.K. Rowling'>J.K. Rowling</option>
        </select>

        <label name='tags'>Tags</label>
        <select name='tags' onChange={props.handleChange}>
          <option value=''>None</option>
          <option value='In Library'>In library</option>
        </select>

        <label name='year'>Year Published</label>
        <select name='year' onChange={props.handleChange}>
          <option value=''>None</option>
          <option value='1998'>1998</option>
        </select>
      </form>
    </div>
  )
}

export default FilterOptions
