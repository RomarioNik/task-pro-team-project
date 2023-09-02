import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import WelcomePage from 'pages/WelcomePage';
import AuthPage from 'pages/AuthPage';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import HomePage from 'pages/HomePage';
import NotFound from './NotFound';

import { useDispatch } from 'react-redux';
//----------------------------------------
import 'overlayscrollbars/overlayscrollbars.css';

import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';

import { PrivateRoute, RestrictedRoute } from './Routes/Routes';
import ScreensPage from 'pages/ScreensPage/ScreensPage';
import { useIsUserRefresh } from 'hooks/useIsUserRefreshing';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const isRefreshing = useIsUserRefresh();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Toaster />
      <Routes>
        <Route>
          <Route path="/" element={<Layout />} />
          <Route index element={<WelcomePage />} />
          <Route
            path="auth/:id"
            element={
              <RestrictedRoute redirectTo="/home" component={<AuthPage />} />
            }
          >
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
          </Route>

          <Route
            path="home"
            element={
              <PrivateRoute redirectTo="/auth/login" component={<HomePage />} />
            }
          >
            <Route path=":boardName" element={<ScreensPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
