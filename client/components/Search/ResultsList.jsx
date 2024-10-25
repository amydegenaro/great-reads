import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ results, selectBook }) => (
  <div id="results">
    {results.map((result) => (
      <div key={`result-${result.worksID}`} className="single-result">
        <h4 className="result-title">
          <button onClick={() => selectBook(result)} type="button">
            {result.title}
          </button>
        </h4>
        <h4>by {result.author}</h4>
        <p>First published in {result.year}</p>
        <p>Editions: {result.editions}</p>
      </div>
    ))}
  </div>
);

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectBook: PropTypes.func.isRequired,
};

export default SearchResults;
