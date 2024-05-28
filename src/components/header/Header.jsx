import React, { useState } from 'react';
import './header.css';

const Header = () => {

  const [Toggle, openMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <a href="https://github.com/" className="nav-logo">
          Lim
        </a>

        <div className={Toggle ? "nav-menu open-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="https://github.com/" className="nav-link">
                <i className="uil uil-home nav-icon"></i>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="https://github.com/" className="nav-link">
                <i className="uil uil-user nav-icon"></i>
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="https://github.com/" className="nav-link">
                <i className="uil uil-file-alt nav-icon"></i>
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a href="https://github.com/" className="nav-link">
                <i className="uil uil-scenery nav-icon"></i>
                Portfolio
              </a>
            </li>
          </ul>
          <i className="uil uil-times-square nav-close" onClick={() => openMenu(!Toggle)}></i>
        </div>
        <div className="nav-toggle" onClick={() => openMenu(!Toggle)}>
            <i className="uil uil-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header