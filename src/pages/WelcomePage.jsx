import React from 'react';
import { Link } from 'react-router-dom';
const WelcomePage = () => {
  return (
    <>
      <div>WelcomePage</div>
      <ul>
        <li>
          <Link to="auth/login">Login</Link>
        </li>
        <li>
          <Link to="auth/register">Register</Link>
        </li>
      </ul>
    </>
  );
};

export default WelcomePage;
