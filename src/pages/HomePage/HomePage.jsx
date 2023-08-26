import React, { useState } from 'react';
import style from './HomePage.module.css';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import ScreensPage from '../ScreensPage/ScreensPage';

const HomePage = () => {
  //по временной схеме храним тему в локальном стейте
  const [theme, setTheme] = useState('light');

  const switchTheme = e => {
    setTheme(e.target.value);
  };

  return (
    <>
      <Header />
      <div className={style.test} data-theme={theme}>
        <div>
          <select value={theme} onChange={switchTheme}>
            <option>Light</option>
            <option>Dark</option>
            <option>Violet</option>
          </select>
        </div>

        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Outlet />
            {/* <ScreensPage /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
