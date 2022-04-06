import React from 'react';
import PropTypes from 'prop-types';
import {
  generateTagList,
  generateAuthorList,
  generateYearList,
} from '../utilityFunctions';

const FilterOptions = ({
  author,
  clearFilters,
  handleChange,
  results,
  tags,
  year,
}) => {
  const tagList = generateTagList(results);
  const authorList = generateAuthorList(results);
  const yearList = generateYearList(results);

  return (
    <form id="filters">
      <label name="author">Author</label>
      <select name="author" onChange={handleChange} value={author}>
        <option value="All">All</option>
        {authorList.map((authorName, idx) => (
          <option key={`author-${idx}`} value={authorName}>
            {author}
          </option>
        ))}
      </select>

      <label name="tags">Tags</label>
      <select name="tags" onChange={handleChange} value={tags}>
        <option value="All">All</option>
        {tagList.map((tag, idx) => (
          <option key={`tag-${idx}`} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      <label name="year">Year Published</label>
      <select name="year" onChange={handleChange} value={year}>
        <option value="All">All</option>
        {yearList.map((bookYear, idx) => (
          <option key={`year-${idx}`} value={bookYear}>
            {year}
          </option>
        ))}
      </select>

      <button type="button" className="btn btn-clear" onClick={clearFilters}>
        Clear Filters
      </button>
    </form>
  );
};

FilterOptions.propTypes = {
  author: PropTypes.arrayOf(PropTypes.string).isRequired,
  clearFilters: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.string.isRequired,
};

export default FilterOptions;
