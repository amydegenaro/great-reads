import React from 'react'
import {connect} from 'react-redux'
import {getResultsByTitle} from '../store'
import SearchResults from './searchResults'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.title === nextState.title
  // }

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

  render() {
    console.log('props', this.props)
    return (
    <div>
      <h2>GreatReads</h2>
      <form onSubmit={this.handleSubmit}>
        <label name="title">Search by Title</label>
        <input name="title" value={this.state.title} onChange={this.handleChange} placeholder="Book title"/>
        <button type="submit">Search</button>
      </form>
      <h3>Results:</h3>
      <SearchResults results={this.props.results} />
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


export default connect(mapState, mapDispatch)(Home)
