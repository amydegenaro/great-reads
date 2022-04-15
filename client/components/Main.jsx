import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {
  getResultsByTitle,
  getBookDetails,
  removeResults,
  showLoading,
} from '../store';

import Header from './Header';
import ResultsView from './Results';
import BookView from './BookView';
import Home from './Home';

const Main = ({
  details,
  foundResults,
  getBookDetails,
  getResultsByTitle,
  loading,
  removeResults,
  results,
  showLoading,
}) => {
  // search query, selected sort value, and selected filters
  const [title, setTitle] = useState('');
  const [sort, setSort] = useState('');
  const [author, setAuthor] = useState('All');
  const [tags, setTags] = useState('All');
  const [year, setYear] = useState('All');
  const navigate = useNavigate();

  const handleSearch = (evt) => setTitle(evt.target.value);
  const handleAuthorFilter = (evt) => setAuthor(evt.target.value);
  const handleTagsFilter = (evt) => setTags(evt.target.value);
  const handleYearFilter = (evt) => setYear(evt.target.value);
  const handleSort = (evt) => setSort(evt.target.name);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    showLoading();
    await getResultsByTitle(title);
    setSort('relevance');
    navigate('/results');
  };

  const clearFilters = () => {
    setAuthor('All');
    setTags('All');
    setYear('All');
  };

  const selectBook = async (book) => {
    showLoading();
    await getBookDetails(book);
    navigate('/book');
  };

  const clearSearchResults = () => {
    removeResults();
    setTitle('');
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            handleSearch={handleSearch}
            handleSubmit={handleSubmit}
            title={title}
            loading={loading}
            foundResults={foundResults}
          />
        }
      />
      <Route
        path="/"
        element={
          <Header
            clearSearchResults={clearSearchResults}
            handleSearch={handleSearch}
            handleSubmit={handleSubmit}
            title={title}
          />
        }
      >
        <Route
          path="results"
          element={
            <ResultsView
              handleAuthorFilter={handleAuthorFilter}
              handleTagsFilter={handleTagsFilter}
              handleYearFilter={handleYearFilter}
              handleSort={handleSort}
              clearFilters={clearFilters}
              selectBook={selectBook}
              results={results}
              foundResults={foundResults}
              loading={loading}
              filters={{ sort, author, tags, year }}
            />
          }
        />
        <Route
          path="book"
          element={<BookView details={details} />}
        />
      </Route>
    </Routes>
  );
};

Main.propTypes = {
  details: PropTypes.shape({}).isRequired,
  foundResults: PropTypes.bool,
  getBookDetails: PropTypes.func.isRequired,
  getResultsByTitle: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  removeResults: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  showLoading: PropTypes.func.isRequired,
};

Main.defaultProps = {
  foundResults: null,
};

const mapState = (state) => ({
  results: state.searchResults,
  foundResults: state.foundResults,
  details: state.selectedBook,
  loading: state.loading,
});

const mapDispatch = (dispatch) => ({
  getResultsByTitle: (searchInput) => dispatch(getResultsByTitle(searchInput)),
  getBookDetails: (bookInfo) => dispatch(getBookDetails(bookInfo)),
  removeResults: () => dispatch(removeResults()),
  showLoading: () => dispatch(showLoading()),
});

export default connect(mapState, mapDispatch)(Main);
