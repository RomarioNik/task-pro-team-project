import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading component...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
