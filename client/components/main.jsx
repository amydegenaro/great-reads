import React from 'react'
import {connect} from 'react-redux'
import {getResultsByTitle} from '../store'
import SearchBox from './SearchBox'
import SortButtons from './SortButtons'
import SearchResults from './SearchResults'
import {sortResults} from '../utilityFunctions'


class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      visible: []
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

  // add this to redux store instead?
  handleSort(evt) {
    this.setState({
      visible: sortResults(this.props.results, evt.target.name)
    })
  }

  render() {
    return (
      <div>
        <h2>GreatReads</h2>
        <SearchBox handleChange={this.handleChange} handleSubmit={this.handleSubmit} state={this.state} />
        <SortButtons handleSort={this.handleSort} />
        <SearchResults results={this.state.visible.length > 0 ? this.state.visible : this.props.results} />
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
