import React from 'react';
import '../Styles/Navbar.css'; // Import the CSS for styling

// Inspiration: https://v4.brittanychiang.com/

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo">RK</div>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#work">Work Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-resume">
        <a target='__blank' href="/resume.pdf" className="resume-button">Resume</a>
      </div>
    </nav>
  );
}

export default Navbar;
