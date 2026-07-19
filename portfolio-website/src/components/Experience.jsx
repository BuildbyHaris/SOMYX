import React from 'react';
import './Experience.css';

const TIMELINE_DATA = [
  {
    role: "Graphic Design & Digital Marketing",
    badge: "SELF EMPLOYED",
    company: "FIVERR",
    companyIcon: "🟩", 
    duration: "2021 — Present",
    tagline: "Working with international clients — mostly US & Uk based — delivering Designs and earning 5-star ratings.",
    bullets: [
      "Built projects for US & Uk clients with 5-star ratings.",
      "Logo & Brand Identity, Childern Books, Social Media Designs — fully remote"
    ]
  },
  {
    role: "AI Video & Image Generation ",
    badge: "CONTRACT",
    company: "SeeBiz",
    companyIcon: "🔷", 
    duration: "jan 2025 — jul 2026",
    tagline: "Worked in SeeBiz for 1 year Creating AI videos & Images for the startup ecosystem and internal teams.",
    bullets: [
      "Create high quality AI videos & images",
      "Gained real client-facing experience in a professional setting"
    ]
  },
  {
    role: "WordPress Developer",
    badge: "ON-SITE · LAHORE",
    company: "ASQAURE TEC / SOFTWARE HOUSE",
    companyIcon: "⚫",
    duration: "Jun 2023 —  August 2024",
    tagline: "1-Year on-site role at a software house in Lahore — first professional experience in a real team environment.",
    bullets: [
      "Built client websites with theme customization & plugin setup",
      "First professional role — learned team workflow hands-on"
    ]
  }
];

export default function Experience() {
  return (
    <section className="experience-section">
      <div className="experience-master-wrapper">
        
        {/* PHASE 1: UPPER SPLIT GRID LAYOUT */}
        <div className="experience-header-split">
          
          {/* Left Column Text Anchor */}
          <div className="exp-left-brand">
            <div className="exp-badge-tag">
              <span className="badge-green-dot"></span>
              <span className="badge-text">/Experience</span>
            </div>
            <h2 className="exp-main-heading">
              Built Through Experience.<span className="heading-triangle-glyph">▵</span>
            </h2>
            <p className="exp-lead-text">
              Real projects, real clients — this is what shaped how I think and build today.
            </p>
          </div>

          {/* Right Column Stark White Education Card */}
          <div className="edu-card-container">
            <div className="education-white-card">
              <div className="edu-card-header">
                <div className="edu-icon-circle">🎓</div>
                <span className="edu-header-text">EDUCATION</span>
              </div>

              <h3 className="edu-degree-title">Bachelor's in Graphic Design</h3>
              <div className="edu-semester-pill">Graduated</div>

              <hr className="edu-card-divider" />

              <div className="edu-details-grid">
                <div className="grid-info-block">
                  <span className="block-label">🏫 UNIVERSITY</span>
                  <span className="block-value">Government College University</span>
                </div>
                <div className="grid-info-block">
                  <span className="block-label">📍 CAMPUS</span>
                  <span className="block-value">Lahore, Pakistan</span>
                </div>
                <div className="grid-info-block">
                  <span className="block-label">🗂️ FIELD</span>
                  <span className="block-value">Graphic Design</span>
                </div>
                <div className="grid-info-block">
                  <span className="block-label">🕒 DURATION</span>
                  <span className="block-value">4 Years</span>
                </div>
              </div>

              <div className="edu-card-footer">
                <div className="enrollment-status">
                  <span className="status-green-dot"></span>
                  <span className="status-text">Graduated</span>
                </div>
                <div className="duration-stamp">📅 2021 — 2025</div>
              </div>
            </div>
          </div>

        </div>

        {/* PHASE 2: LOWER FULL-WIDTH RUNNING TIMELINE */}
        <div className="experience-timeline-stream">
          
          {/* The Running Track Wire */}
          <div className="timeline-spine-track">
            <div className="timeline-cursor-arrow">▼</div>
          </div>

          {/* Stacking Milestone Blocks */}
          <div className="timeline-cards-stack">
            {TIMELINE_DATA.map((job, idx) => (
              <div key={idx} className="job-timeline-card">
                
                {/* Floating Left Side Logo Orb */}
                <div className="job-logo-anchor">
                  <div className="job-logo-circle">{job.companyIcon}</div>
                </div>

                {/* Main Body Content */}
                <div className="job-card-body">
                  <div className="job-header-row">
                    <div className="job-title-group">
                      <h3 className="job-role-text">{job.role}</h3>
                      <span className="job-badge-pill">{job.badge}</span>
                    </div>
                  </div>

                  <div className="job-meta-row">
                    <span className="job-company-name">🏢 {job.company}</span>
                    <span className="job-calendar-duration">📅 {job.duration}</span>
                  </div>

                  <p className="job-tagline-narrative">{job.tagline}</p>

                  <ul className="job-bullets-list">
                    {job.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="job-bullet-item">
                        <span className="orange-bullet-dot">•</span>
                        <span className="bullet-string-content">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}