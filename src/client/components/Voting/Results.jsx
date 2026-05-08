import React from 'react';
import PropTypes from 'prop-types';

const Results = ({
  getResults,
  results,
  setTallyType
}) => {
  const {
    book,
    votes,
    sortedBooks = []
  } = results;
  const handleTallyChange = (evt) => setTallyType({
    [evt.target.value]: true
  });

  return (
    <div>
      <label htmlFor="tally-select">
        Select a Tally Type
        <select id="tally-select" name="tallyType" onChange={handleTallyChange}>
          <option value="majority">Majority</option>
          <option value="ranked">Ranked Choice</option>
        </select>
      </label>
      <button
        className="btn btn-sort"
        type="submit"
        onClick={getResults}
      >
        Get Results
      </button>

      {book && (
        <>
          <p
            style={{
              backgroundColor: '#8b3a52', // dark pink
              border: 'solid #b95d79 .3rem',
              color: '#fff',
              margin: '2rem 0',
              padding: '1rem',
            }}
          >
            {book} wins with {votes} votes!
          </p>
          <p>Full Results</p>
          {sortedBooks.map((currentBook) => (
            <div
              key={currentBook}
              className="single-result"
            >
              <p className="result-title">{currentBook}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

Results.propTypes = {
  getResults: PropTypes.func.isRequired,
  results: PropTypes.shape({
    book: PropTypes.string,
    votes: PropTypes.number,
    sortedBooks: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setTallyType: PropTypes.func.isRequired,
};

export default Results;
