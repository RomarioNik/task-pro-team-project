import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthPage = () => {
  return (
    <div>
      <p>AuthPage</p>
      <Outlet />
    </div>
  );
};

export default AuthPage;
