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
      <div className={css.container}>
        {id === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default AuthPage;
