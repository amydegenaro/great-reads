import React, { useState, useEffect } from 'react';
import getMostVotes from './utils/getMostVotes';
import getRankedChoice from './utils/getRankedChoice';
import data from './mockData.json';

import List from './List';
import Vote from './Vote';
import Results from './Results';

const Main = () => {
  const [view, setView] = useState('list');
  const [bookList, setBookList] = useState([]);
  const [voteHistory, setVoteHistory] = useState({});
  const [tallyType, setTallyType] = useState({ majority: true, ranked: false });
  const [results, setResults] = useState({});

  // Setup mock data
  useEffect(() => {
    setBookList(data.bookList);
    setVoteHistory(data.altVoteHistoryArray);
  }, []);

  const getResults = () => {
    const votes = Object.values(voteHistory);
    let winner;
    if (tallyType.ranked) {
      winner = getRankedChoice(votes);
    } else {
      winner = getMostVotes(votes);
    }
    setResults(winner);
  };

  return (
    <>
      <div id="vote-options" className="button-group">
        <button
          type="button"
          className="btn btn-sort"
          onClick={() => setView('list')}
        >
          Create a List
        </button>
        <button
          type="button"
          className="btn btn-sort"
          onClick={() => setView('vote')}
        >
          Submit a Vote
        </button>
        <button
          type="button"
          className="btn btn-sort"
          onClick={() => setView('results')}
        >
          Get Results
        </button>
      </div>
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
              <Results
                getResults={getResults}
                results={results}
                setTallyType={setTallyType}
              />
            );
          default:
            return <div />;
        }
      })()}
    </>
  );
};

export default Main;
