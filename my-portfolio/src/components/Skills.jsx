import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'bi-code-slash',
      iconColor: '#00d9ff',
      skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C', 'C#', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks and Libraries',
      icon: 'bi-gear-wide-connected',
      iconColor: '#00d9ff',
      skills: [ 'Angular', 'Dotnet', 'React.js', 'React Native (Learning)', 'Tailwind CSS', 'FastAPI']
    },
    {
      title: 'Tools and Technologies',
      icon: 'bi-tools',
      iconColor: '#00d9ff',
      skills: ['Git', 'GitHub', 'Docker (learning)', 'Postman', 'Figma']
    },
    {
      title: 'Databases',
      icon: 'bi-database',
      iconColor: '#00d9ff',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL']
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container section-title">
        <h2>Skills</h2>
        <p>Technical skills I've acquired through projects and continuous learning</p>
      </div>

      <div className="container">
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-card-header">
                <i className={`bi ${category.icon}`} style={{ color: category.iconColor }}></i>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-card-body">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <i className={`bi ${getSkillIcon(skill)}`}></i>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getSkillIcon(skill) {
  const iconMap = {
    'JavaScript': 'bi-filetype-js',
    'TypeScript': 'bi-filetype-tsx',
    'Java': 'bi-cup-hot',
    'Python': 'bi-filetype-py',
    'C': 'bi-code',
    'C#': 'bi-code-square',
    'PHP': 'bi-filetype-php',
    'HTML': 'bi-filetype-html',
    'CSS': 'bi-filetype-css',
    'React.js': 'bi-gear',
    'React Native (Learning)': 'bi-phone',
    'Tailwind CSS': 'bi-palette',
    'FastAPI': 'bi-lightning',
    'Angular': 'bi-gear-wide',
    'Dotnet': 'bi-dot',
    'Git': 'bi-git',
    'GitHub': 'bi-github',
    'Docker (learning)': 'bi-box-seam',
    'Postman': 'bi-send',
    'Figma': 'bi-vector-pen',
    'MySQL': 'bi-database',
    'MongoDB': 'bi-database-fill',
    'PostgreSQL': 'bi-database-gear'
  };
  return iconMap[skill] || 'bi-check-circle';
}

export default Skills;