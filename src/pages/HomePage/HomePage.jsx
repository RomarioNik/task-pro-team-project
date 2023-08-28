// import React, { useState } from 'react';
import style from './HomePage.module.css';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { useUserData } from 'hooks/useUserData';
import { useUserLoading } from 'hooks/useUserLoading';

// import ScreensPage from '../ScreensPage/ScreensPage';

const HomePage = () => {
  const { userTheme } = useUserData();
  const isLoading = useUserLoading();

  return (
    !isLoading && (
      <>
        <div className={style.test} data-theme={userTheme}>
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Header />
              <Outlet />
              {/* <ScreensPage /> */}
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default HomePage;
