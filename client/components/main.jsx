import React from 'react'
import {connect} from 'react-redux'
import {getResultsByTitle} from '../store'
import {filterAndSort} from '../utilityFunctions'

import SearchBox from './SearchBox'
import SortButtons from './SortButtons'
import FilterOptions from './FilterOptions'
import SearchResults from './SearchResults'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '', // search query
      sort: '', // selected sort value
      author: '', // selected filter value
      tags: '', // selected filter value
      year: '' // selected filter value
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSort = this.handleSort.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.getResultsByTitle(this.state.title)
    this.setState({title: ''})
  }

  handleSort(evt) {
    this.setState({
      sort: evt.target.name
    })
  }

  render() {
    return (
      <div>
        <h2>GreatReads</h2>
        <SearchBox
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          state={this.state}
        />
        <SortButtons handleSort={this.handleSort} />
        <FilterOptions
          handleChange={this.handleChange}
          filter={this.state.filter}
        />
        <SearchResults results={filterAndSort(this.props.results, this.state)} />
      </div>
    )
  }
}

const mapState = state => ({
  results: state.search
})

const mapDispatch = dispatch => ({
  getResultsByTitle: searchInput => dispatch(getResultsByTitle(searchInput))
})

export default connect(mapState, mapDispatch)(Main)
