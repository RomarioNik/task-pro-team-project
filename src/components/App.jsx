import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import WelcomePage from 'pages/WelcomePage';
import AuthPage from 'pages/AuthPage';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import HomePage from 'pages/HomePage';
import NotFound from './NotFound';

const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />} />
        <Route index element={<WelcomePage />} />
        <Route path="auth/:id" element={<AuthPage />}>
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>

        <Route path="home" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
