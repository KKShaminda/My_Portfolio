import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <i className={`header-toggle bi ${menuOpen ? 'bi-x' : 'bi-list'}`} onClick={toggleMenu}></i>
      
      <header id="header" className={`header ${menuOpen ? 'header-show' : ''}`}>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" onClick={toggleMenu} className={activeSection === 'hero' ? 'active' : ''}><i className="bi bi-house navicon"></i><span>Home</span></a></li>
            <li><a href="#about" onClick={toggleMenu} className={activeSection === 'about' ? 'active' : ''}><i className="bi bi-person navicon"></i><span>About</span></a></li>
            <li><a href="#skills" onClick={toggleMenu} className={activeSection === 'skills' ? 'active' : ''}><i className="bi bi-file-earmark-text navicon"></i><span>Skills</span></a></li>
            <li><a href="#projects" onClick={toggleMenu} className={activeSection === 'projects' ? 'active' : ''}><i className="bi-code-slash  navicon"></i><span>Projects</span></a></li>
            <li><a href="#contact" onClick={toggleMenu} className={activeSection === 'contact' ? 'active' : ''}><i className="bi bi-envelope navicon"></i><span>Contact</span></a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;