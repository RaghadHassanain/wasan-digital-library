import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const authUser = localStorage.getItem('auth_user');
  
  if (!authUser) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

export default ProtectedRoute;
