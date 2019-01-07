import React from 'react'
import {connect} from 'react-redux'
import {getResultsByTitle, getBookDetails} from '../store'

import SearchBox from './SearchBox'
import SearchView from './searchView'
import BookView from './bookView'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '', // search query
      sort: '', // selected sort value
      author: '', // selected filter value
      tags: '', // selected filter value
      year: '', // selected filter value
      bookSelected: false,
      loading: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.selectBook = this.selectBook.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    await this.props.getResultsByTitle(this.state.title)
    this.setState({
      title: '',
      bookSelected: false
    })
  }

  handleSort(evt) {
    this.setState({
      sort: evt.target.name
    })
  }

  async selectBook(book) {
    await this.props.getBookDetails(book)
    this.setState({
      bookSelected: true
    })
  }

  render() {
    return (
      <div>
        <h2>GreatReads</h2>
        <SearchBox
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title={this.state.title}
        />
        {
          this.state.bookSelected ?
          <BookView details={this.props.details} />
          :
          <SearchView
            handleChange={this.handleChange}
            handleSort={this.handleSort}
            selectBook={this.selectBook}
            results={this.props.results}
            state={this.state}
          />
        }
      </div>
    )
  }
}

const mapState = state => ({
  results: state.searchResults,
  details: state.selectedBook
})

const mapDispatch = dispatch => ({
  getResultsByTitle: searchInput => dispatch(getResultsByTitle(searchInput)),
  getBookDetails: bookInfo => dispatch(getBookDetails(bookInfo))
})

export default connect(mapState, mapDispatch)(Main)
