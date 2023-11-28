// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ token, children }) => {
  // Check if the token exists
  if (!token) {
 // If the token doesn't exist, redirect to the landing page
    return <Navigate to="/landing" replace />;
  }
  // If the token exists, render the children (actual content of the route)
  return children;
};

export default ProtectedRoute;
