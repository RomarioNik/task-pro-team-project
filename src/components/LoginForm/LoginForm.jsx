import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const LoginForm = () => {
  return (
    <>
      <NavLink to="/auth/register">Registration  </NavLink>
      <NavLink to="/auth/login">Login</NavLink>
      <div>LoginForm</div>
      <Link to="/home">Login Now</Link>
    </>
  );
};

export default LoginForm;
