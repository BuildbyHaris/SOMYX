import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Work from './components/Work';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ProtectedRoute from './components/ProtectedRoute';

// Unified Homepage Component Layout Stacking the Core Portfolio Flow
const HomeLandingPage = () => {
  const location = useLocation();

  // URL Hash Monitor: Safely catches incoming references like /#work or /#contact and slides smoothly to them
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="home-master-timeline-wrapper">
      
      {/* THE CONTINUOUS RUNNING SCROLL TRACK RUNNING THROUGH THE ENTIRE HOMEPAGE */}
      <div className="global-scroll-spine-track">
        <div className="global-traveling-laser-dot"></div>
      </div>

      {/* Sequential Scroll Anchor Nodes */}
      <section id="home"><Hero /></section>
      <section id="work"><Work /></section>
      <section id="services"><Services /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>
      
    </div>
  );
};

// Protected Client Management Room
const ClientDashboard = () => (
  <div style={{ padding: '12rem 2rem', textAlign: 'center', color: '#fff' }}>
    <h2 style={{ color: '#10b981', fontSize: '2rem' }}>Secure Client Admin Portal</h2>
    <p style={{ color: '#64748b', marginTop: '0.5rem' }}>Access granted for authorized administration panels.</p>
  </div>
);

export default function AppRoutes() {
  return (
    <Routes>
      {/* Dynamic Main Base Route Entry Point */}
      <Route path="/" element={<HomeLandingPage />} />
      
      {/* Fully Protected Dashboard Route */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <ClientDashboard />
          </ProtectedRoute>
        } 
      />

      {/* Wildcard Fallback Route Handler */}
      <Route path="*" element={<HomeLandingPage />} />
    </Routes>
  );
}