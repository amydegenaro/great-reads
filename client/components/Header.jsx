import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, useNavigate } from 'react-router-dom';
import SearchBox from './SearchBox';

const Header = ({ clearSearchResults, handleSearch, handleSubmit, title }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div id="header">
        <h2
          onClick={() => {
            clearSearchResults();
            navigate('/');
          }}
          className="header-title"
        >
          GreatReads.
        </h2>
        <SearchBox
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
          title={title}
        />
      </div>
      <div id="content">
        <Outlet />
      </div>
    </div>
  );
};

Header.propTypes = {
  clearSearchResults: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
