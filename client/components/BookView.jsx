import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const BookView = ({
  details: { author, cover, date, description, title, pages },
}) => {
  const navigate = useNavigate();

  return (
    <div id="book-view">
      <button
        type="button"
        className="btn btn-back"
        onClick={() => navigate('/results')}
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
  details: PropTypes.shape({
    author: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    pages: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookView;
