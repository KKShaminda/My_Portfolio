import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <h3 className="sitename">Kaveesha Shaminda</h3>
        <p>Software Engineer</p>
        <div className="social-links d-flex justify-content-center">
          <a href="https://github.com/KKShaminda" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/kaveesha-shaminda" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <div className="container">
          <div className="copyright">
            <span>Copyright</span> <b>Kaveesha Shaminda</b> <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;