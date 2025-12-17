import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector(selectIsAuthenticated); 

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}