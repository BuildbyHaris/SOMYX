import React from 'react';
import './Contact.css';
import logoimage from '../assets/logo.jpeg';

export default function Contact() {
  const contactLinks = [
    {
      type: 'EMAIL',
      label: 'somyxdigitalsolutions@gmail.com',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=somyxdigitalsolutions@gmail.com',
      iconClass: 'icon-email'
    },
    {
      type: 'WHATSAPP',
      label: '+92 328 5533203',
      url: 'https://wa.me/923285533203',
      iconClass: 'icon-whatsapp'
    },
    {
      type: 'LINKEDIN',
      label: 'linkedin.com/in/Sohail-Akram',
      url: 'https://www.linkedin.com/in/sohail-akram-8653a226a?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      iconClass: 'icon-linkedin'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* LEFT PROFILE PANEL */}
        <div className="contact-left-content">
          <div className="contact-breadcrumb">
            <span className="breadcrumb-dot">●</span>
            <span className="breadcrumb-path">/Contact</span>
          </div>

          <h2 className="contact-title">Contact Me</h2>

          <p className="contact-subtitle">
            Open to <span className="subtitle-highlight">freelance projects</span>, collaborations, and exciting opportunities.<br />
            Drop a message — I usually respond <span className="subtitle-underline">within 24 hours</span>.
          </p>

          <div className="contact-links-stack">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-row-card"
              >
                <div className="card-left-brand-group">
                  <div className={`brand-icon-frame ${link.iconClass}`}></div>
                  <div className="brand-text-details">
                    <span className="brand-meta-tag">{link.type}</span>
                    <span className="brand-address-label">{link.label}</span>
                  </div>
                </div>
                <div className="card-right-action">
                  <span className="arrow-vector-icon">↗</span>
                </div>
              </a>
            ))}
          </div>

          {/* PRESENCE INDICATOR PILL */}
          <div className="presence-status-pill">
            <span className="status-pulse-green"></span>
            <span className="status-label-text">Online SOMYX Team</span>
          </div>
        </div>

        {/* RIGHT FULL-LENGTH PHYSICAL ID LANYARD */}
        <div className="contact-right-graphics">
          <div className="lanyard-physical-strap">
            <div className="strap-woven-band">
              <div className="strap-inner-logo-pattern">★</div>
            </div>
            <div className="strap-metallic-clip">
              <div className="clip-mounting-loop"></div>
            </div>
          </div>

          <div className="lanyard-id-badge-body">
            <div className="badge-surface-sheen"></div>
            <div className="badge-content-cluster">
              {/* REPLACE THE TEXT H1 WITH THIS CONTAINER */}
              <div className="badge-logo-container">
                <img src={logoimage} alt="Logo" className="badge-uploaded-logo" />
              </div>
              <div className="badge-micro-dots-accent"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}