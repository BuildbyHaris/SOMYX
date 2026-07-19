import React, { useState } from 'react';
import GlobeEngine from './GlobeEngine';
import empoweringImage from '../assets/impowering.webp'; // <-- your image path
import './Services.css';

export default function Services() {
  const [activeStackTab, setActiveStackTab] = useState('Services');

  const techData = {
    Services: [
      { name: 'Logo Design' }, { name: 'Brand Identity' }, { name: 'Childern Book Design' },
      { name: 'Social Media Design' }, { name: 'Business Card Design' }, { name: 'Stationary Design' }, { name: 'AI Video Generation' }, { name: 'Ads Design' }, { name: 'Video Editing' }, { name: 'AI image Generation' }, { name: 'Bussiness Website' }, { name: 'Landing Page' }
    ],
    Tools: [
      { name: 'Adobe Illustrate' }, { name: 'Adobe PhotoShop' }, { name: 'Canva' }, { name: 'Adobe FireFly' }, { name: 'Abobe PremierPro' },
      { name: 'OpenAI' }, { name: 'Veo3' },
      { name: 'Claude AI' }, { name: 'Gemini' }, { name: 'Grok' }, { name: 'wordpress' }
    ]
  };

  return (
    <>
      {/* TOP PART: Header on light background */}
      <section id="services" className="services-section services-section-top">
        <div className="services-container">
          <div className="services-breadcrumb">
            <span className="services-dot">●</span>
            <span className="services-track-text">/Services</span>
          </div>

          <header className="services-header-block">
            <h2 className="services-title">What I Offer</h2>
            <p className="services-subtitle">
              I help businesses, startups, and individuals build a{' '}
              <span className="text-highlight">professional online presence</span> with Branding, Websites, AI visuals and social media marketing.
            </p>
          </header>
        </div>
      </section>

      {/* FULL-WIDTH DARK SECTION */}
      <section className="empowering-startup-fullwidth">
        <div className="empowering-inner-wrap">
          <div className="empowering-image-panel">
            <img
              src={empoweringImage}
              alt="AI Startup Illustration"
              className="empowering-illustration"
            />
          </div>
          <div className="empowering-text-panel">
            <span className="empowering-top-line"></span>
            <h3 className="empowering-heading">
              <span className="highlight-red">Creative Solutions</span>{' '}
              <span className="highlight-white">That Help Your</span>{' '}
              <span className="highlight-red">Business Grow</span>
            </h3>
            <p className="empowering-description">
              Every successful business starts with a strong brand and a professional online presence. I help startups, small businesses, and established brands create impactful visual identities through branding, graphic design, WordPress websites, children's book design, AI-generated images and videos, and digital marketing.            </p>
            <p className="empowering-description">
              By combining creativity with practical strategies, I deliver solutions that help businesses attract customers, build credibility, and grow with confidence.            </p>
            <button
              className="empowering-cta-btn"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              GET STARTED
            </button>
          </div>
        </div>
      </section>

      {/* BOTTOM PART: Remaining cards on light background */}
      <section className="services-section services-section-bottom">
        <div className="services-container">
          <div className="services-master-flow-layout">

            <article className="independent-service-card global-distribution-banner-card">
              <div className="global-text-left-panel">
                <h3 className="global-title">Built for the World</h3>
                <p className="global-description">
                  I work with clients remotely — wherever you are, I'm just a message away.
                </p>
                <button
                  className="global-cta-black-btn"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  GET STARTED
                </button>
              </div>

              <div className="global-globe-right-panel">
                <GlobeEngine />
              </div>
            </article>

            <article className="independent-service-card tech-stack-ticker-card">
              <div className="ticker-meta-upper-row">
                <div className="ticker-title-left">
                  <div className="ticker-pill-headline">
                    <span className="headline-green-dot">●</span>
                    <h4>Creative Solutions</h4>
                  </div>
                  <p className="ticker-sub-text">
                    Helping businesses stand out with Professional branding, Custom Premium WordPress websites, AI-powered visuals, and digital marketing                  </p>
                </div>

                <div className="ticker-segmented-filter-nav">
                  {['Services', 'Tools'].map((tab) => (
                    <button
                      key={tab}
                      className={`segment-tab-btn ${activeStackTab === tab ? 'active' : ''}`}
                      onClick={() => setActiveStackTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="ticker-infinite-marquee-tape">
                <div className="marquee-content-running-loop">
                  {techData[activeStackTab].concat(techData[activeStackTab]).map((item, index) => (
                    <div key={index} className="marquee-icon-node">
                      {item.icon && <span className="node-graphic-icon">{item.icon}</span>}
                      <span className="node-label-title">{item.name}</span>
                    </div>
                  ))}
                </div>
                <div className="marquee-footer-track-hint">
                  <span>{techData[activeStackTab].length} items</span>
                  <span className="fade-hint-label">Hover to pause</span>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
    </>
  );
}