import React, { useState } from 'react';

const ThemeChanger = () => {
  const [theme, setTheme] = useState('light');

  const switchTheme = e => {
    console.log(e.target.value);
    setTheme(e.target.value);
  };

  return (
    <div>
      <select value={theme} onChange={switchTheme}>
        <option>Light</option>
        <option>Dark</option>
        <option>Violet</option>
      </select>
    </div>
  );
};

export default ThemeChanger;
