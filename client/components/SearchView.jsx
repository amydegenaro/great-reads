import React from 'react';
import PropTypes from 'prop-types';
import { filterAndSort } from '../utilityFunctions';

import SortButtons from './SortButtons';
import FilterOptions from './FilterOptions';
import SearchResults from './SearchResults';

const SearchView = ({
  clearFilters,
  foundResults,
  handleChange,
  handleSort,
  loading,
  results,
  selectBook,
  state,
}) => (
  <div id="search">
    <FilterOptions
      handleChange={handleChange}
      clearFilters={clearFilters}
      results={results}
      author={state.author}
      tags={state.tags}
      year={state.year}
    />
    <div id="main">
      <SortButtons handleSort={handleSort} sort={state.sort} />
      {loading ? (
        <p>Loading, please wait...</p>
      ) : (
        <div>
          {foundResults !== false ? (
            <SearchResults
              results={filterAndSort(results, state)}
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
  handleChange: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectBook: PropTypes.func.isRequired,
  state: PropTypes.shape({
    author: PropTypes.arrayOf(PropTypes.string).isRequired,
    sort: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchView;
