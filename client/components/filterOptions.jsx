import React from 'react'
import {generateTagList, generateAuthorList, generateYearList} from '../utilityFunctions'

const FilterOptions = props => {
  const {results} = props
  const tagList = generateTagList(results)
  const authorList = generateAuthorList(results)
  const yearList = generateYearList(results)

  return (
    <form id="filters">
      <label name="author" className="filter-label">Author</label>
      <select name="author" onChange={props.handleChange}>
        <option value=''>All</option>
        {
          authorList.map((author, idx) => <option key={idx} value={author}>{author}</option>)
        }
      </select>

      <label name="tags" className="filter-label">Tags</label>
      <select name="tags" onChange={props.handleChange}>
        <option value=''>All</option>
        {
          tagList.map((tag, idx) => <option key={idx} value={tag}>{tag}</option>)
        }
      </select>

      <label name="year" className="filter-label">Year Published</label>
      <select name="year" onChange={props.handleChange}>
        <option value=''>All</option>
        {
          yearList.map((year, idx) => <option key={idx} value={year}>{year}</option>)
        }
      </select>

      <button type="button" className="btn btn-clear" onClick={props.clearFilters}>Clear Filters</button>
    </form>
  )
}

export default FilterOptions
