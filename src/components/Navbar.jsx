import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/quote">
          <li>Quote</li>
        </Link>
        <Link to="/calculator">
          <li>Calculator</li>
        </Link>
        <Link to="/">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
