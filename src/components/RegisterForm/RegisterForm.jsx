import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <>
      <NavLink to="/auth/register">Registration  </NavLink>
      <NavLink to="/auth/login">Login</NavLink>
      <div>RegisterForm</div>
      <Link to="/home">Register Now</Link>
    </>
  );
};

export default RegisterForm;
