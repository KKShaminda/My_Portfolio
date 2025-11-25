import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header" className={`header d-flex flex-column justify-content-center ${menuOpen ? 'header-show' : ''}`}>
      <i className={`header-toggle d-xl-none bi ${menuOpen ? 'bi-x' : 'bi-list'}`} onClick={toggleMenu}></i>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#hero" ><i className="bi bi-house navicon"></i><span>Home</span></a></li>
          <li><a href="#about"><i className="bi bi-person navicon"></i><span>About</span></a></li>
          <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i><span>Resume</span></a></li>
          <li><a href="#portfolio"><i className="bi bi-images navicon"></i><span>Portfolio</span></a></li>
          <li><a href="#contact"><i className="bi bi-envelope navicon"></i><span>Contact</span></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;