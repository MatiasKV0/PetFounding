import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Falta crear un selector para obtener el estado de autenticación
const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector(selectIsAuthenticated); 

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}