import React, { useState } from 'react';
import './Work.css';
import { projectsData } from '../data/projectsData'; // Imported professional data module

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'BRANDING', 'BOOK DESIGN', 'WORDPRESS'];

  // Dynamic filter processing algorithm
  const filteredProjects = activeFilter === 'ALL'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="work-section">
      <div className="work-section-container">
        
        {/* UPPER BREADCRUMB INDICATOR */}
        <div className="work-breadcrumb-track">
          <span className="breadcrumb-dot">●</span>
          <span className="breadcrumb-string">/Work</span>
        </div>

        {/* HEADER TOOLBAR DASHBOARD */}
        <div className="work-header-control-row">
          <div className="work-header-left-block">
            <h2 className="work-main-title">Featured Projects</h2>
            <p className="work-sub-description">
              Here are some of the projects I've built while learning, improving my design skills, and working with clients.
            </p>
          </div>

          {/* DYNAMIC CAPSULE TAB COMPONENT CONTROLS */}
          <div className="work-filter-navigation-block">
            <span className="filter-label-prefix"><span className="filter-icon-bars">≡</span> FILTER</span>
            <div className="filter-capsule-container-rail">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-tab-button ${activeFilter === cat ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* METRIC COUNTER ROW INDICATOR */}
        <div className="work-total-projects-counter">
          {filteredProjects.length} {filteredProjects.length === 1 ? 'PROJECT' : 'PROJECTS'}
        </div>

        {/* PORTFOLIO GRID HOUSING FRAME */}
        <div className="work-portfolio-grid">
          {filteredProjects.map((project) => {
            const hasLinks = project.liveUrl || project.sourceUrl;

            return (
              <article key={project.id} className={`project-card-node ${!hasLinks ? 'visual-only-card' : ''}`}>
                
                {/* MEDIA LAYER PREVIEW DISPLAY MASK CONTAINER */}
                <div className="project-media-wrapper-frame">
                  <span className="project-corner-category-tag">{project.category}</span>
                  
                  {/* If the project doesn't have any code links, clicking the image itself will open it directly in a new tab */}
                  {!hasLinks ? (
                    <a href={project.image} target="_blank" rel="noopener noreferrer" className="visual-image-wrapper-anchor" title="View Full Image">
                      <img src={project.image} alt={project.title} className="project-thumbnail-asset" />
                      <div className="visual-zoom-indicator">
                        <span className="zoom-icon">🔍</span>
                        <span>VIEW IMAGE</span>
                      </div>
                    </a>
                  ) : (
                    <img src={project.image} alt={project.title} className="project-thumbnail-asset" />
                  )}
                  
                  {/* INTERACTIVE HOVER REVEAL ONLY RENDERED IF CORRESPONDING LINKS EXIST */}
                  {hasLinks && (
                    <div className="project-card-hover-overlay-bar">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover-action-link-btn live-preview">
                          <span className="action-circle-dot live">●</span>
                          <span>VISIT SITE</span>
                        </a>
                      )}
                      {project.sourceUrl && (
                        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover-action-link-btn source-code">
                          <span className="action-circle-dot source">●</span>
                          <span>SOURCE</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* LOWER SPECIFICATION META ELEMENT METADATA BOX */}
                <div className="project-meta-details-box">
                  <div className="project-title-row-layout">
                    {/* If there's a live site URL, clicking the title opens the site; otherwise, it opens the image */}
                    <h3 className="project-heading-title">
                      <a 
                        href={project.liveUrl || project.image} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-title-link"
                      >
                        {project.title}
                      </a>
                    </h3>
                    
                    <div className="project-card-arrow-glyph-box">
                      <a 
                        href={project.liveUrl || project.image} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-arrow-anchor"
                      >
                        <span className="project-diagonal-arrow-element">↗</span>
                      </a>
                    </div>
                  </div>
                  
                  <span className="project-timeline-date-label">{project.date}</span>
                  
                  <p className="project-paragraph-narrative-summary">
                    {project.description}
                  </p>

                  {/* TECH STACK FRAMEWORK CORE TAG ENGINE HOUSING */}
                  <div className="project-tech-capsules-cloud-row">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="stack-pill-node-element">{tag}</span>
                    ))}
                  </div>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}