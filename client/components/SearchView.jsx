import React from 'react';
import PropTypes from 'prop-types';
import { filterAndSort } from '../utilityFunctions';

import SortButtons from './SortButtons';
import FilterOptions from './FilterOptions';
import SearchResults from './SearchResults';

const SearchView = ({
  clearFilters,
  foundResults,
  handleAuthorFilter,
  handleTagsFilter,
  handleYearFilter,
  handleSort,
  loading,
  results,
  selectBook,
  filters,
}) => (
  <div id="search">
    <FilterOptions
      handleAuthorFilter={handleAuthorFilter}
      handleTagsFilter={handleTagsFilter}
      handleYearFilter={handleYearFilter}
      clearFilters={clearFilters}
      results={results}
      author={filters.author}
      tags={filters.tags}
      year={filters.year}
    />
    <div id="main">
      <SortButtons handleSort={handleSort} sort={filters.sort} />
      {loading ? (
        <p>Loading, please wait...</p>
      ) : (
        <div>
          {foundResults !== false ? (
            <SearchResults
              results={filterAndSort(results, filters)}
              selectBook={selectBook}
            />
          ) : (
            <p>No books found!</p>
          )}
        </div>
      )}
    </div>
  </div>
);

SearchView.propTypes = {
  clearFilters: PropTypes.func.isRequired,
  foundResults: PropTypes.bool.isRequired,
  handleAuthorFilter: PropTypes.func.isRequired,
  handleTagsFilter: PropTypes.func.isRequired,
  handleYearFilter: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectBook: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    author: PropTypes.string.isRequired,
    sort: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchView;
