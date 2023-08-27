// import { useSelector } from 'react-redux';
import { useLoggedIn } from 'hooks/useLoggedIn';
import { Navigate } from 'react-router-dom';
// import { selectIsLoggedIn } from 'redux/auth/authSlice';
// import { useLoggedIn } from '../../hooks/useLoggedIn';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = useLoggedIn();
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useLoggedIn();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
