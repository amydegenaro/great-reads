import React, { useState, useEffect } from 'react';
// import getMostVotes from './utils/getMostVotes';
import getRankedChoice from './utils/getRankedChoice';
import data from './mockData.json';

import List from './List';
import Vote from './Vote';
import Results from './Results';

const Main = () => {
  const [view, setView] = useState('list');
  const [bookList, setBookList] = useState([]);
  const [voteHistory, setVoteHistory] = useState({});
  const [results, setResults] = useState({});

  // Setup mock data
  useEffect(() => {
    setBookList(data.bookList);
    setVoteHistory(data.altVoteHistoryArray);
  }, []);

  const getResults = () => {
    // const winner = getMostVotes(Object.values(voteHistory));
    const winner = getRankedChoice(Object.values(voteHistory));
    setResults(winner);
    setView('results');
  };

  return (
    <>
      <h3>
        Book Club Ballot
      </h3>
      <button
        type="button"
        className="btn btn-active"
        onClick={() => setView('list')}
      >
        Create a List
      </button>
      <button
        type="button"
        className="btn btn-active"
        onClick={() => setView('vote')}
      >
        Submit a Vote
      </button>
      <button
        type="button"
        className="btn btn-active"
        onClick={getResults}
      >
        Get Results
      </button>
      {(() => {
        switch (view) {
          case 'list':
            return (
              <List
                bookList={bookList}
                setBookList={setBookList}
                setView={setView}
              />
            );
          case 'vote':
            return (
              <Vote
                bookList={bookList}
                setVoteHistory={setVoteHistory}
                voteHistory={voteHistory}
              />
            );
          case 'results':
            return (
              <Results results={results} />
            );
          default:
            return <div />;
        }
      })()}
    </>
  );
};

export default Main;
