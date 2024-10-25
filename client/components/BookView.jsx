import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const BookView = ({
  clearSelectedBook,
  details: { author, cover, date, description, title, pages },
}) => {
  const navigate = useNavigate();
  const handleBackToResults = () => {
    clearSelectedBook();
    navigate('/search');
  }

  return (
    <div id="book-view">
      <button
        type="button"
        className="btn btn-back"
        onClick={handleBackToResults}
      >
        Back to results
      </button>

      {title ? (
        <div className="book-wrapper">
          <div className="cover-art">
            <img alt="selected book cover" src={cover} />
          </div>

          <div className="book-details">
            <h2>{title}</h2>
            <h3>by {author[0].name}</h3>
            {/* <p className="metadata">ISBN: {isbn}</p> */}
            <p className="metadata">{pages} pages</p>
            <p className="metadata">First published in {date}</p>
            <p className="book-description">{description}</p>
          </div>
        </div>
      ) : (
        <p>Could not find book details.</p>
      )}
    </div>
  );
};

BookView.propTypes = {
  clearSelectedBook: PropTypes.func.isRequired,
  details: PropTypes.shape({
    author: PropTypes.string,
    cover: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    pages: PropTypes.string,
  }).isRequired,
};

export default BookView;
