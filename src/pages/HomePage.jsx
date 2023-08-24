import React from 'react';
import { Outlet } from 'react-router-dom';

// import SharedLayout from '../components/SharedLayout';
import HeaderTemp from 'components/_HeaderTemp/HeaderTemp';
import SidebarTemp from 'components/_SidebarTemp/SidebarTemp';
import ScreensPage from './ScreensPage';

const HomePage = () => {


  return (
    // <div>
    //   <SharedLayout />
    // </div>
    <div style={{ backgroundColor: '#e5c5e8', display: 'flex' }}>
      <SidebarTemp />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <HeaderTemp />
        <Outlet />
        {/* <ScreensPage /> */}
      </div>
    </div>
  );
};

export default HomePage;
