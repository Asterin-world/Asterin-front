import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/ASTERIN-HEADER-LOGO.png';  // Use the correct path to your logo
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <ul className="nav-list left">
          <li>
            <NavLink to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">
              About Us
            </NavLink>
          </li>
        </ul>

        {/* Centered Logo */}
        <div className="logo-container">
          <NavLink to="/">
          <img src={logo} alt="Asterin Logo" className="logo" />
          </NavLink>
        </div>

        <ul className="nav-list right">
          <li>
            <NavLink to="/blogs" activeclassname="active">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeclassname="active">
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Menu Icon for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Lines below logo */}
      <div className="line-container">
        <div className="line"></div> {/* Line on the left */}
        <div className="line"></div> {/* Line on the right */}
      </div>

      {/* Navigation items displayed on mobile when the menu is open */}
      <ul className={`nav-list-mobile ${menuOpen ? 'show' : ''}`}>
        <li>
          <NavLink to="/" activeclassname="active" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active" onClick={toggleMenu}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" activeclassname="active" onClick={toggleMenu}>
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active" onClick={toggleMenu}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
