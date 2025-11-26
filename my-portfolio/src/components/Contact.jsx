import React from 'react';
import '../styles/Contact.css';

function Contact() {
  const contactDetails = [
    {
      id: 1,
      icon: 'bi-envelope',
      iconColor: '#18d26e',
      title: 'Email',
      value: 'kaveeshashaminda01@gmail.com',
      link: 'mailto:kkshaminda0406@gmail.com'
    },
    {
      id: 2,
      icon: 'bi-linkedin',
      iconColor: '#18d26e',
      title: 'LinkedIn',
      value: 'Kaveesha Shaminda',
      link: 'https://linkedin.com/in/kaveesha-shaminda'
    },
    {
      id: 3,
      icon: 'bi-github',
      iconColor: '#18d26e',
      title: 'GitHub',
      value: 'KKShaminda',
      link: 'https://github.com/KKShaminda'
    },
    {
      id: 4,
      icon: 'bi-telephone',
      iconColor: '#18d26e',
      title: 'Phone',
      value: '071 434 8841',
      link: 'tel:0714348841'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container section-title">
        <h2>Contact</h2>
        <p>Get in touch with me for collaborations or opportunities</p>
      </div>

      <div className="container">
        <div className="contact-grid">
          {contactDetails.map((contact) => (
            contact.id === 4 ? (
              <div key={contact.id} className="contact-card">
                <div className="contact-icon">
                  <i className={`bi ${contact.icon}`} style={{ color: contact.iconColor }}></i>
                </div>
                <div className="contact-content">
                  <h3>{contact.title}</h3>
                  <p>{contact.value}</p>
                </div>
              </div>
            ) : (
              <a
                key={contact.id}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : '_self'}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="contact-card"
              >
                <div className="contact-icon">
                  <i className={`bi ${contact.icon}`} style={{ color: contact.iconColor }}></i>
                </div>
                <div className="contact-content">
                  <h3>{contact.title}</h3>
                  <p>{contact.value}</p>
                </div>
              </a>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;