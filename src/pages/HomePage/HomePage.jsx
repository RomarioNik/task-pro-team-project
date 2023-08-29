// import React, { useState } from 'react';
import css from './HomePage.module.css';
// import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { useUserData } from 'hooks/useUserData';

import ScreensPage from '../ScreensPage/ScreensPage';

const HomePage = () => {
  const { userTheme } = useUserData();

  return (
    <>
      <div className={css.test} data-theme={userTheme}>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div className={css.homePage_wrap}>
            <Header />
            {/* <Outlet /> */}
            <ScreensPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
