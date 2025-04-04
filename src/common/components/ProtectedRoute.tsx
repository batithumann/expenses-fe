import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Check for the presence of a JWT token in localStorage
  const token = localStorage.getItem('jwtToken');

  if (!token) {
    // Redirect to login if no token is found
    return <Navigate to="/" replace />;
  }

  // If token exists, render the child component (protected page)
  return children;
};

export default ProtectedRoute;
