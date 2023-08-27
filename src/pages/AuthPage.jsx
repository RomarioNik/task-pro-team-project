import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';
// import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <div>
      <p>AuthPage</p>
      {id === 'login' ? <LoginForm /> : <RegisterForm />}
      {/* <Outlet /> */}
    </div>
  );
};

export default AuthPage;
