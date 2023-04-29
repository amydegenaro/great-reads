import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, useNavigate } from 'react-router-dom';
// import SearchBox from './SearchBox';
import Nav from './Nav';

const Header = ({ clearSearchResults, handleSearch, handleSubmit, title }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky-header">
        <header id="header">
          <h2
            onClick={() => {
              clearSearchResults();
              navigate('/');
            }}
            className="header-title"
          >
            GreatReads.
          </h2>
          {/* <SearchBox
            handleSearch={handleSearch}
            handleSubmit={handleSubmit}
            title={title}
          /> */}
        </header>
        <Nav />
      </div>
      <main id="content">
        <Outlet />
      </main>
    </>
  );
};

Header.propTypes = {
  clearSearchResults: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
