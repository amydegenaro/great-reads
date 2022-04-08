import React from 'react';
import { connect } from 'react-redux';
import { Box, CssBaseline } from '@mui/material';
import {
  getResultsByTitle,
  getBookDetails,
  removeResults,
  showLoading,
} from '../store';

import SearchBox from './SearchBox';
import SearchView from './searchView';
import BookView from './bookView';
import Home from './home';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      // search query, selected sort value, and selected filters
      title: '',
      sort: '',
      author: 'All',
      tags: 'All',
      year: 'All',
      bookSelected: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.selectBook = this.selectBook.bind(this);
    this.unselectBook = this.unselectBook.bind(this);
    this.clearSearchResults = this.clearSearchResults.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    this.props.showLoading();
    await this.props.getResultsByTitle(this.state.title);
    this.setState({
      sort: 'relevance',
      bookSelected: false,
    });
  }

  handleSort(evt) {
    this.setState({
      sort: evt.target.value,
    });
  }

  clearFilters() {
    this.setState({
      author: 'All',
      tags: 'All',
      year: 'All',
    });
  }

  async selectBook(book) {
    this.props.showLoading();
    await this.props.getBookDetails(book);
    this.setState({
      bookSelected: true,
    });
  }

  unselectBook() {
    this.setState({
      bookSelected: false,
    });
  }

  clearSearchResults() {
    this.props.removeResults();
  }

  render() {
    return (
      <Box sx={{ backgroundColor: '#e6e6e6' }}>
        <CssBaseline />
        {
          // show the home landing page if there are no search results
          this.props.results.length === 0 ? (
            <Home
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              title={this.state.title}
              loading={this.props.loading}
              foundResults={this.props.foundResults}
            />
          ) : (
            <div id="container">
              <div id="header">
                <h2 onClick={this.clearSearchResults} className="header-title">
                  GreatReads.
                </h2>
                <SearchBox
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  title={this.state.title}
                />
              </div>
              <div id="content">
                {
                  // show the single book view if a search result has been cicked
                  // otherwise, show the search results
                  this.state.bookSelected ? (
                    <BookView
                      unselectBook={this.unselectBook}
                      details={this.props.details}
                    />
                  ) : (
                    <SearchView
                      handleChange={this.handleChange}
                      handleSort={this.handleSort}
                      clearFilters={this.clearFilters}
                      selectBook={this.selectBook}
                      results={this.props.results}
                      foundResults={this.props.foundResults}
                      loading={this.props.loading}
                      state={this.state}
                    />
                  )
                }
              </div>
            </div>
          )
        }
      </Box>
    );
  }
}

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
