import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          As a person who is eager to learn new things and always try to develop myself up to a better state. 
          My curiosity always helps me to discover new things and I always try to share my knowledge with others.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-3">
            <img src="/assets/img/Kaveesha_front.png" className="img-fluid" alt="Profile" />
          </div>
          <div className="col-lg-8 content">
            <h2>Software Engineer &amp; Full Stack Developer</h2>
            <p className="fst-italic py-3">
              Passionate about creating innovative web solutions and constantly learning new technologies.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BSc (Hons) in Computing and Information Systems</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>kaveeshashaminda01@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+94 71 434 8841</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>School:</strong> <span>Mahanama College, Colombo-03</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  
                  <li><i className="bi bi-chevron-right"></i> <strong>University:</strong> <span>Sabaragamuwa university of Sri Lanka</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>28 August 2001</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Homagama, Colombo, Sri Lanka</span></li>
                </ul>
              </div>
            </div>
            {/* <p className="py-3">
              Currently pursuing my degree in CIS at Sabaragamuwa University of Sri Lanka. 
              I have hands-on experience in full-stack development using modern frameworks like Angular, React, 
              and backend technologies including .Net and Node.js. I'm passionate about building scalable 
              applications and solving complex problems.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;