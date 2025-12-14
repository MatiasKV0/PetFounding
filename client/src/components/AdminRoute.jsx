import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const selectUserRole = (state) => state.auth.role;
const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default function AdminRoute({ roles, children }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userRole = useSelector(selectUserRole);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const isAuthorized = roles && roles.includes(userRole);

  if (!isAuthorized) {
    return <Navigate to="/" replace />;
  }

  return children;
}