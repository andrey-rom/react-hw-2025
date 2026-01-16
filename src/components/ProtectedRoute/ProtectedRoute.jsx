import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAppSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

