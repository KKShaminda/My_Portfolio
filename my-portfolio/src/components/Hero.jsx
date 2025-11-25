import React, { useEffect } from 'react';
import Typed from 'typed.js';
import '../styles/Hero.css';

function Hero() {
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: ['Software Engineer'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero section">
      <div className="container-fluid" data-aos="zoom-out">
        <div className="row justify-content-center align-items-center">
          <div className="col-9">
            <div className="hero-content">
              <div className="hero-text">
                <h2>Kaveesha Shaminda</h2>
                <p>I'm a <span className="typed"></span></p>
                <div className="social-links">
                  <a href="https://github.com/KKShaminda" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                  <a href="https://www.linkedin.com/in/kaveesha-shaminda" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="hero-image">
                <img src="/assets/img/Kaveesha.png" alt="Kaveesha Shaminda" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;