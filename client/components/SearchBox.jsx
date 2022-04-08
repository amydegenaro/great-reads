import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({
  handleSearch,
  handleSubmit,
  title,
}) => (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        name="title"
        className="search-box"
        value={title}
        onChange={handleSearch}
        placeholder="search by title"
      />
      <button type="submit" className="btn btn-search">
        Find Books
      </button>
    </form>
  );

SearchBox.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default SearchBox;
