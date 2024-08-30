import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const admin = localStorage.getItem('token');
  return admin ? <Outlet /> : <Navigate to="/admin" />;
}

export default PrivateRoute;
