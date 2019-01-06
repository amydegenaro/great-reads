import React from 'react'
import {connect} from 'react-redux'
import {getResultsByTitle} from '../store'
import SearchBox from './SearchBox'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  render() {
    return (
      <SearchBox handleChange={this.handleChange} handleSubmit={this.handleSubmit} state={this.state}/>
    )
  }
}

const mapDispatch = dispatch => ({
  getResultsByTitle: searchInput => dispatch(getResultsByTitle(searchInput))
})

export default connect(null, mapDispatch)(Main)
