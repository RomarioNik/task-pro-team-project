import React, { useState } from 'react';
import style from './SharedLayout.module.css';

const SharedLayout = () => {
  const [theme, setTheme] = useState('light');

  const switchTheme = e => {
    setTheme(e.target.value);
  };

  return (
    <div className={style.test} data-theme={theme}>
      <div>
        <h2>React homework template</h2>

        <select value={theme} onChange={switchTheme}>
          <option>Light</option>
          <option>Dark</option>
          <option>Violet</option>
        </select>
      </div>
    </div>
  );
};

export default SharedLayout;
