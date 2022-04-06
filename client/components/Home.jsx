import React from 'react';
import PropTypes from 'prop-types';
import SearchBox from './SearchBox';

const Home = ({ foundResults, handleChange, handleSubmit, loading, title }) => (
  <div id="home">
    <h2>GreatReads.</h2>
    <SearchBox
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      title={title}
    />
    {foundResults === false && (
      <p className="home-subtext">No books found, try again.</p>
    )}
    {loading && <p className="home-subtext">Searching the shelves...</p>}
  </div>
);

Home.propTypes = {
  foundResults: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
