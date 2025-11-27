import React, { useState } from 'react';
import '../styles/Projects.css';

function Projects() {
  const [filter] = useState('*');

  const projects = [
    {
      id: 1,
      title: "JobLink Portal",
      category: "web",
      description: "Developed a functional job portal featuring a responsive landing page, job listings, job details with dynamic routing, and user login/register forms. Built a dashboard for job seekers and recruiters, including interactive job posting, application forms, and real-time application tracking with mock data. Backend integration for live data and authentication is planned",
      technologies: ["Angular", ".NET", "PostgreSQL", "TypeScript", "C#"],
      link: "https://github.com/KKShaminda/Joblink",
      date: "2025"
    },
    {
      id: 2,
      title: "Mobile & PC Repair Management System",
      category: "web",
      description: "Developed a web-based system for Lovely Tech that integrates online product sales and repair management, enabling customers to purchase accessories, book and track repairs, and make secure payments while helping the business manage products, orders, and services efficiently.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
      link: "https://github.com/KKShaminda/Community-project-Lovelytech",
      date: "2025"
    },
    {
      id: 3,
      title: "Medicare Web Application",
      category: "web",
      description: "Developed a comprehensive healthcare web application that connects patients, doctors, pharmacists, and lab technicians on one platform, enabling AI-powered doctor recommendations, online appointment booking, digital prescriptions, lab report management, and secure access to medical records for efficient and patient-centered hospital management.",
      technologies: ["Angular", "FastAPI", "Python", "MongoDB", "TypeScript"],
      link: "https://github.com/kkindu12/medicare",
      date: "2024"
    },
    {
      id: 4,
      title: "Smart EduMentor Platform",
      category: "web",
      description: "Developed a comprehensive web-based platform that connects universities, students, and graduate mentors to deliver interactive courses with tests, assignments, and certifications, while providing personalized career guidance and promoting engagement through a rewarding affiliate referral system.",
      technologies: ["React"],
      link: "https://github.com/Chandima0406/EduMentor",
      date: "2024"
    }
  ];

  const filteredProjects = filter === '*' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects section">
      <div className="container section-title">
        <h2>Projects</h2>
        <p>Showcasing my development work and technical expertise</p>
      </div>

      <div className="container">
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-date">{project.date}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="bi bi-github"></i>
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;