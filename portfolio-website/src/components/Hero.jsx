import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero4.png'; 
import claudesvg from '../assets/Claude.png';

export default function Hero() {
  const skills = [
    'Adobe Illustrator','Adobe PhotoShop','Adobe Premier Pro','Canva','Logo & Brand Identity','Childern Book Illustration','Digital Marketing',  
    'Graphic Design', 'Video Editing','AI Video Generation','LANDING PAGES','WORDPRESS'
  ];

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `/#${targetId}`);
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-master-container">
        
        {}
        <div className="hero-left-content">
          <h1 className="hero-primary-name">SOMYX</h1>
          <p className="hero-narrative-description">
            Helping businesses grow with <span className="highlight-text-node"> Branding, Graphic design, WordPress websites,</span> AI-generated visuals and <span className="highlight-text-node">Digital marketing solutions</span>, that deliver <span className="highlight-text-node">real results.</span>.
          </p>
          
          <div className="hero-actions-row">
            <a href="#work" onClick={(e) => handleSmoothScroll(e, 'work')} className="hero-cta-btn primary-dark">
              <span>View Projects</span>
              <span className="cta-arrow-glyph">↗</span>
            </a>
            
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="hero-cta-btn secondary-outline">
              <span>Book a Call</span>
              <span className="cta-arrow-glyph">↗</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: DEPTH-LAYERED DUAL ORBIT CANVAS */}
        <div className="hero-right-canvas">
          <div className="avatar-orbit-assembly">
            
            {/* Ambient Radial Spotlight Behind the Assembly */}
            <div className="orbit-spotlight-glow"></div>

            {/* Concentric Rails */}
            <div className="celestial-orbit-ring inner-track"></div>
            <div className="celestial-orbit-ring outer-track"></div>

            {/* CENTRAL PORTRAIT CONTAINER (Layered dynamically underneath badges) */}
            <div className="avatar-image-mask-frame">
              <img 
                src={heroImage} 
                alt="Sohail Akram" 
                className="avatar-profile-photo"
              />
            </div>

            {/* REVOLVING ORBITAL TECH BADGES (Higher Z-Index to glide right over the photo) */}
            <div className="orbit-spinner-wrapper orbit-speed-outer-1">
              <div className="floating-orbit-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg" alt="illustrator" />
              </div>
            </div>

            <div className="orbit-spinner-wrapper orbit-speed-inner-1">
              <div className="floating-orbit-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" alt="photoshop" />
              </div>
            </div>

            <div className="orbit-spinner-wrapper orbit-speed-outer-2">
              <div className="floating-orbit-badge">
                <img src= {claudesvg} 
                alt="Claude" />
              </div>
            </div>

            <div className="orbit-spinner-wrapper orbit-speed-inner-2">
              <div className="floating-orbit-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
              </div>
            </div>

            <div className="orbit-spinner-wrapper orbit-speed-outer-3">
              <div className="floating-orbit-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="WordPress" />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* FOOTER INFINITE MARQUEE */}
      <div className="hero-marquee-footer">
        <div className="marquee-infinite-track">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="marquee-node-element">
              <span className="marquee-string-label">{skill}</span>
              <span className="marquee-diamond-divider">◇</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}