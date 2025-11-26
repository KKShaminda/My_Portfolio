import React, { useState } from 'react';
import '../styles/Projects.css';

function Projects() {
  const [filter] = useState('*');

  const projects = [
    {
      id: 1,
      title: "JobLink Portal",
      category: "web",
      description: "Developed a comprehensive job portal application designed to connect job seekers with employers efficiently. The platform features a robust Angular frontend providing an intuitive user interface, a .NET backend ensuring secure and scalable operations, and PostgreSQL for reliable database management. Key functionalities include advanced job search and filtering, user profile management for both job seekers and employers, application tracking system, resume upload and management, employer job posting dashboard, and real-time notifications for application status updates.",
      technologies: ["Angular", ".NET", "PostgreSQL", "TypeScript", "C#"],
      link: "https://github.com/KKShaminda/Joblink",
      date: "2024"
    },
    {
      id: 2,
      title: "Mobile & PC Repair Management System",
      category: "web",
      description: "Built a full-stack repair management system using the MERN stack (MongoDB, Express.js, React, Node.js) to streamline operations for a mobile and PC repair business. The system manages the entire repair workflow from service request to completion, including customer management, repair ticket creation and tracking, inventory management for spare parts, technician assignment and workload distribution, invoice generation and payment tracking, service history and warranty management, and automated SMS/email notifications for repair status updates.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
      link: "https://github.com/KKShaminda/Community-project-Lovelytech",
      date: "2024"
    },
    {
      id: 3,
      title: "Medicare Web Application",
      category: "web",
      description: "Created an innovative healthcare platform that leverages AI technology to provide intelligent doctor recommendations based on patient symptoms. The application revolutionizes the way patients find appropriate medical care by analyzing symptom patterns and suggesting suitable specialists. Features include AI-powered symptom analysis and doctor matching, comprehensive doctor profiles with specializations and ratings, online appointment booking and scheduling system, patient health records management, telemedicine consultation support, prescription and medical document storage, appointment reminders and follow-up notifications.",
      technologies: ["Angular", "FastAPI", "Python", "MongoDB", "TypeScript"],
      link: "https://github.com/kkindu12/medicare",
      date: "2024"
    },
    {
      id: 4,
      title: "Smart EduMentor Platform",
      category: "web",
      description: "Developed an educational technology platform that facilitates meaningful connections between students and mentors, fostering academic growth and career development. The platform provides a collaborative environment with real-time communication tools, resource sharing capabilities, and comprehensive progress tracking mechanisms. Key features include mentor-student matching based on subjects and expertise, real-time chat and video conferencing for virtual sessions, resource library for sharing study materials and documents, assignment submission and feedback system, progress tracking with analytics and reports, scheduling system for mentoring sessions, and student performance dashboards with goal tracking.",
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