import React from 'react'

const BookView = props => {
  const {details} = props
  return (
    <div id="book-view">
      <button type="button" className="btn btn-back" onClick={props.unselectBook}>Back to results</button>
      <div className="book-wrapper">
        <img src={details.cover.medium} className="cover-art"/>
        <div className="book-details">
          <h2>{details.title}</h2>
          <h3>by {details.author[0].name}</h3>
          <p className="metadata">ISBN: {details.isbn}</p>
          <p className="metadata">{details.pages} pages</p>
          <p className="metadata">First published in {details.date}</p>
          <p className="book-description">{details.description}</p>
        </div>
      </div>
    </div>
  )
}

export default BookView
