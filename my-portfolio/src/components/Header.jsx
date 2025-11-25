import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <i className={`header-toggle bi ${menuOpen ? 'bi-x' : 'bi-list'}`} onClick={toggleMenu}></i>
      
      <header id="header" className={`header ${menuOpen ? 'header-show' : ''}`}>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" onClick={toggleMenu}><i className="bi bi-house navicon"></i><span>Home</span></a></li>
            <li><a href="#about" onClick={toggleMenu}><i className="bi bi-person navicon"></i><span>About</span></a></li>
            <li><a href="#resume" onClick={toggleMenu}><i className="bi bi-file-earmark-text navicon"></i><span>Resume</span></a></li>
            <li><a href="#portfolio" onClick={toggleMenu}><i className="bi bi-images navicon"></i><span>Portfolio</span></a></li>
            <li><a href="#contact" onClick={toggleMenu}><i className="bi bi-envelope navicon"></i><span>Contact</span></a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;