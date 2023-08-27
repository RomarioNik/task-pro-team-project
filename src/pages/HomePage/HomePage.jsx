// import React, { useState } from 'react';
import style from './HomePage.module.css';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { useUserTheme } from 'hooks/useUserTheme';

// import ScreensPage from '../ScreensPage/ScreensPage';

const HomePage = () => {

  const theme = useUserTheme();

  return (
 
    <div className={style.test} data-theme={theme}>


      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Outlet />
          {/* <ScreensPage /> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
