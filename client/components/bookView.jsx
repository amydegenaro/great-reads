import React from 'react'

const BookView = props => {
  const {details} = props
  return (
    <div>
      <h2>{details.title}</h2>
      <h3>by {details.author}</h3>
      <p>ISBN: {details.isbn}</p>
      <p>{details.pages} pages</p>
      <p>First published in {details.date}</p>
      <img src={details.cover.medium} />
      <p>{details.description}</p>
    </div>
  )
}

export default BookView
