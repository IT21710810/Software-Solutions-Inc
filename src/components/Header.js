import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Software Solutions Inc.</h1>
      <nav className="header-nav">
        <ul className="nav-list">
          <li>
            <a href="#solutions" className="nav-link">Solutions</a>
          </li>
          <li>
            <a href="#projects" className="nav-link">Past Projects</a>
          </li>
          <li>
            <a href="#feedback" className="nav-link">Feedback</a>
          </li>
          <li>
            <a href="#articles" className="nav-link">Articles</a>
          </li>
          <li>
            <a href="#gallery" className="nav-link">Gallery</a>
          </li>
          <li>
            <a href="#events" className="nav-link">Events</a>
          </li>
          <li>
            <a href="#contact" className="nav-link">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;