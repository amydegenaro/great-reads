import React from 'react'
import {connect} from 'react-redux'
import {getResultsByTitle} from '../store'

class SearchBox extends React.Component {
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
    console.log('props', this.props)
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label name="title">Search by Title</label>
        <input name="title" value={this.state.title} onChange={this.handleChange} placeholder="Book title"/>
        <button type="submit">Search</button>
      </form>
    </div>
    )
  }
}

const mapDispatch = dispatch => ({
  getResultsByTitle: searchInput => dispatch(getResultsByTitle(searchInput))
})

export default connect(null, mapDispatch)(SearchBox)
