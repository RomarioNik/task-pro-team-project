import React from 'react';
import { Link } from 'react-router-dom';
import NewBoard from 'components/NewEditBoard/NewBoard';
const WelcomePage = () => {
  return (
    <>
      <div>WelcomePage</div>
      <NewBoard></NewBoard>
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
