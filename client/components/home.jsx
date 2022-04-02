import React from 'react';
import SearchBox from './SearchBox';

const Home = (props) => {
  return (
    <div id="home">
      <h2>GreatReads.</h2>
      <SearchBox
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        title={props.title}
      />
      {props.foundResults === false && (
        <p className="home-subtext">No books found, try again.</p>
      )}
      {props.loading && (
        <p className="home-subtext">Searching the shelves...</p>
      )}
    </div>
  );
};

export default Home;
