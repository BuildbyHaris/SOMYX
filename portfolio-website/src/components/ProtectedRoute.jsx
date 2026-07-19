import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  // Authentication flag — set to true to view, change to false to test the redirect
  const isAuthenticated = true; 

  if (!isAuthenticated) {
    return <Navigate to="/Contact" replace />;
  }

  return children;
}