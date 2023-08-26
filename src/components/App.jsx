import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import WelcomePage from 'pages/WelcomePage';
import AuthPage from 'pages/AuthPage';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import HomePage from 'pages/HomePage';
import NotFound from './NotFound';

// import { PrivateRoute, RestrictedRoute } from './Routes/Routes';
import ScreensPage from 'pages/ScreensPage/ScreensPage';

const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />} />
        <Route index element={<WelcomePage />} />
        <Route
          path="auth/:id"
          // element={
          //   <RestrictedRoute redirectTo="/home" component={<AuthPage />} />
          // }
          element={<AuthPage />}
        >
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>

        <Route
          path="home"
          // element={<PrivateRoute redirectTo="/auth" component={<HomePage />} />}
          element={<HomePage />}
        >
          {/* <Route path=":boardName" element={<ScreensPage />} /> */}
          <Route path="test" element={<ScreensPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
