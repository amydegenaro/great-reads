import React from 'react'

const BookView = props => {
  const {details} = props
  return (
    <div>
      <button type="button" onClick={props.unselectBook}>Back to search results</button>
      <h2>{details.title}</h2>
      <h3>by {details.author[0].name}</h3>
      <p>ISBN: {details.isbn}</p>
      <p>{details.pages} pages</p>
      <p>First published in {details.date}</p>
      <img src={details.cover.medium} />
      <p>{details.description}</p>
    </div>
  )
}

export default BookView
