import React from 'react';

const Results = ({
  results,
  getResults,
}) => {
  const {
    book,
    votes,
    sortedBooks = []
  } = results;

  return (
    <div>
      {book ? (
        <>
          <p>
            {book} wins with {votes} votes
          </p>
          <p>Results</p>
          {sortedBooks.map((book) => (
            <p id={book}>{book}</p>
          ))}
        </>
      ) : (
        // <p>Hmm no clear winner...</p>
        <button type="submit" onClick={getResults}>
          Get Results
        </button>
      )}
    </div>
  );
};

export default Results;
