import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';
import css from './AuthPage.module.css';
// import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <div className={css.authPage}>
      {id === 'login' ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default AuthPage;
