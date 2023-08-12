import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fix, setFixed] = useState(false);

  const handleFixed = () => {
    if (window.scrollY > 392) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleFixed);
    return () => {
      window.removeEventListener('scroll', handleFixed);
    };
  }, []); // Add an empty dependency array to ensure the event listener is set up only once

  return (
    <nav className={fix ? 'nav fixed' : 'nav'}>
      <Link to="/">Website</Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to="/about" className="title">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
