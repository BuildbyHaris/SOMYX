import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes';
import './App.css'; 

export default function App() {
  return (
    <Router>
      <div className="app-root-container">
        
        {/* Uniformly mounted glassmorphic navigation layout overlay */}
        <Navbar />

        {/* Dynamic Multi-Route Context Port switching viewspace */}
        <main className="app-main-content">
          <AppRoutes />
        </main>

        {/* Global Dynamic Footer Layout Block */}
        <footer className="app-global-footer">
          &copy; {new Date().getFullYear()} SOMYX. All rights reserved.
        </footer>
        
      </div>
    </Router>
  );
}