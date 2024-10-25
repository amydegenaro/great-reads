import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const { pathname } = useLocation();
  const getIsActive = (navItem) => pathname === navItem

  return (
    <nav>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        <li>
          <Link className={getIsActive('/search') ? 'active' : ''} to="/search">Search</Link>
        </li>
        <li>
          <Link className={getIsActive('/vote') ? 'active' : ''} to="/vote">Vote</Link>
        </li>
        {/* <li>
          <Link className={getIsActive('/vote') && 'active'} to="/vote">Create A Ballot</Link>
        </li>
        <li>
          <Link className={getIsActive('/vote') && 'active'} to="/vote">Submit Vote</Link>
        </li>
        <li>
          <Link className={getIsActive('/vote') && 'active'} to="/vote">Get Results</Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default Nav;
