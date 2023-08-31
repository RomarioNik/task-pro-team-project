import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import css from './HomePage.module.css';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { useUserData } from 'hooks/useUserData';

import ScreensPage from '../ScreensPage/ScreensPage';

const HomePage = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { userTheme } = useUserData();

  const toggleIsOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className={css.test} data-theme={userTheme}>
      <div style={{ display: 'flex' }}>
        {isOpenMenu && <Sidebar closeSidebar={toggleIsOpenMenu} />}
        <MediaQuery minWidth={1440}>{!isOpenMenu && <Sidebar />}</MediaQuery>
        <div className={css.homePage_wrap}>
          <Header handlerMenu={toggleIsOpenMenu} />

          <ScreensPage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
