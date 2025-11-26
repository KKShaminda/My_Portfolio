import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer id="footer" className="footer position-relative">
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
            © 2025 Kaveesha Shaminda | BSc (Hons) Computing & Information Systems | Sabaragamuwa University of Sri Lanka
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;