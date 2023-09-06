import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './Layout';

import { useDispatch } from 'react-redux';
import Loader from 'components/Loader/Loader';
//----------------------------------------
import 'overlayscrollbars/overlayscrollbars.css';

import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';

import { PrivateRoute, RestrictedRoute } from './Routes/Routes';
import { useIsUserRefresh } from 'hooks/useIsUserRefreshing';
import { Toaster } from 'react-hot-toast';

import HomePage from 'pages/HomePage/HomePage';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const LoginForm = lazy(() => import('./LoginForm'));
const RegisterForm = lazy(() => import('./RegisterForm'));
const ScreensPage = lazy(() => import('../pages/ScreensPage'));
const NotFound = lazy(() => import('./NotFound'));

const App = () => {
  const isRefreshing = useIsUserRefresh();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Toaster />
      <Suspense fallback={<Loader />}>
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
                <PrivateRoute
                  redirectTo="/auth/login"
                  component={<HomePage />}
                />
              }
            >
              <Route path=":boardName" element={<ScreensPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
