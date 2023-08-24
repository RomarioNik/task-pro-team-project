// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/authSlice';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isRefreshing = useSelector(selectIsRefreshing);
  // const isLoggedIn = true;
  // const isRefreshing = true;
  const isLoggedIn = false;
  const isRefreshing = false;

  return !isLoggedIn && !isRefreshing ? (
    <Navigate to={redirectTo} />
  ) : (
    Component
  );
};

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isLoggedIn = true;
    const isLoggedIn = false;

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
