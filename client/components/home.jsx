import React from 'react'


class Home extends React.Component {
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
    console.log(this.state.title)
    this.setState({title: ''})
  }

  render() {
    return (
    <div>
      <h2>GreatReads</h2>
      <form onSubmit={this.handleSubmit}>
        <label name="title">Search by Title</label>
        <input name="title" value={this.state.title} onChange={this.handleChange} placeholder="Book title"/>
        <button type="submit">Search</button>
      </form>
    </div>
    )
  }
}

export default Home
