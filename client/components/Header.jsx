import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
// import SearchBox from './SearchBox';
import Nav from './Nav';

const Header = ({
  clearSearchResults,
  // handleSearch,
  // handleSubmit,
  // title
}) => (
    <>
      <div className="sticky-header">
        <header id="header">
          <h2 className="header-title">
            <Link to="/" onClick={clearSearchResults}>
              GreatReads.
            </Link>
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

Header.propTypes = {
  clearSearchResults: PropTypes.func.isRequired,
  // handleSearch: PropTypes.func.isRequired,
  // handleSubmit: PropTypes.func.isRequired,
  // title: PropTypes.string.isRequired,
};

export default Header;
