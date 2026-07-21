import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navLinksRef = useRef({});

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'work', id: 'work' },
    { label: 'Services', id: 'services' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    if (location.pathname !== '/') return;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          window.history.replaceState(null, '', `/#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Triggers focus when section occupies center screen
      threshold: 0,
    });

    menuItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // 2. Horizontal Moving Line Calculator: Tracks active link width/left position to slide the indicator line
  useEffect(() => {
    const activeElement = navLinksRef.current[activeSection];
    if (activeElement) {
      setIndicatorStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
        opacity: 1
      });
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection, isOpen]);

  // Handle smooth page glide transitions on navigation clicks
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      window.history.pushState(null, '', `/#${targetId}`);
    }
  };

  return (
    <header className="nav-header">
      <div className="nav-container">
        
        {}
        <Link to="/" className="nav-profile-block" onClick={(e) => handleNavClick(e, 'home')}>
          <div className="profile-top-line">
            <span className="status-dot"></span>
            <span className="profile-name">SOMYX</span>
          </div>
          
          <div className="ticker-wrapper">
            <div className="ticker-track">
              <span className="ticker-item">Graphic Designer</span>
              <span className="ticker-item">Open to Freelance</span>
              <span className="ticker-item">Wordpress Developer</span>
              <span className="ticker-item">Digital Marketing</span>
            </div>
          </div>
        </Link>

        {/* Center Links with Sliding Track Indicator */}
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <a 
              key={item.id} 
              href={`/#${item.id}`} 
              ref={(el) => (navLinksRef.current[item.id] = el)}
              className={`nav-link-item ${activeSection === item.id ? 'active-node' : ''}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}

          {/* THE MOVING HORIZONTAL LINE + DOT TRACKER */}
          <div 
            className="navbar-moving-line-track" 
            style={{
              transform: `translateX(${indicatorStyle.left}px)`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity
            }}
          >
            <span className="navbar-moving-dot"></span>
          </div>
        </nav>

        {/* Right Side Actions */}
        <div className="nav-actions-group">
          <a href="/#contact" className="nav-talk-btn" onClick={(e) => handleNavClick(e, 'contact')}>
            Let's Talk
          </a>
          <button className="mobile-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

      </div>
    </header>
  );
}