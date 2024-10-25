import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {
  generateTagList,
  generateAuthorList,
  generateYearList,
} from './utilityFunctions';

const FilterOptions = ({
  author,
  clearFilters,
  handleAuthorFilter,
  handleSearch,
  handleSubmit,
  handleTagsFilter,
  handleYearFilter,
  results,
  tags,
  title,
  year,
}) => {
  const tagList = generateTagList(results);
  const authorList = generateAuthorList(results);
  const yearList = generateYearList(results);

  return (
    <form id="filters" onSubmit={handleSubmit}>
      <div style={{ display: 'flex' }}>
        <input
          name="search"
          value={title}
          onChange={handleSearch}
          placeholder="Search by title"
        />
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} inverse />
        </button>
      </div>

      <h4
        style={{
          marginTop: '2rem',
          marginBottom: '1rem',
          textTransform: 'uppercase'
        }}
      >
        Filters
      </h4>

      <label htmlFor="authorFilter" name="author">
        Author
        <select id="authorFilter" name="author" onChange={handleAuthorFilter} value={author}>
          <option value="All">All</option>
          {authorList.map((authorName) => (
            <option key={`author-${uuidv4()}`} value={authorName}>
              {authorName}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="tagsFilter" name="tags">
        Tags
        <select id="tagsFilter" name="tags" onChange={handleTagsFilter} value={tags}>
          <option value="All">All</option>
          {tagList.map((tag) => (
            <option key={`tag-${uuidv4()}`} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="yearFilter" name="year">
        Year Published
        <select id="yearFilter" name="year" onChange={handleYearFilter} value={year}>
          <option value="All">All</option>
          {yearList.map((bookYear) => (
            <option key={`year-${uuidv4()}`} value={bookYear}>
              {bookYear}
            </option>
          ))}
        </select>
      </label>

      <button type="button" className="btn btn-clear" onClick={clearFilters}>
        Clear Filters
      </button>
    </form>
  );
};

FilterOptions.propTypes = {
  author: PropTypes.string.isRequired,
  clearFilters: PropTypes.func.isRequired,
  handleAuthorFilter: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleTagsFilter: PropTypes.func.isRequired,
  handleYearFilter: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  tags: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default FilterOptions;
