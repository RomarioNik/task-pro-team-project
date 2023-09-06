import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
// import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <div>
      {/* <Suspense fallback={<Loader />}> */}
      {/* <Suspense fallback={<p>loading...</p>}> */}
      <Outlet />
      {/* </Suspense> */}
    </div>
  );
};

export default Layout;
