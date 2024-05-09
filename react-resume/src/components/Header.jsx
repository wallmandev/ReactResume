// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.scss'

const Header = () => {
  return (
    <nav className="header-nav">
      <ul className="header-nav__list">
        <li className="header-nav__items">
          <Link to="/" className="header-nav__links">Home</Link>
        </li>
        <li>
          <Link to="/about" className="header-nav__links">About</Link>
        </li>
        <li>
          <Link to="/skills" className="header-nav__links">Skills</Link>
        </li>
        <li>
          <Link to="/contact" className="header-nav__links">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;