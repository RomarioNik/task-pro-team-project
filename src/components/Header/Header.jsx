import React, { useState } from 'react';

const Header = () => {
  // const [theme, setTheme] = useState('light');

  // const switchTheme = e => {
  //   setTheme(e.target.value);
  // };
  //*отсюда передать тему в глобальній стейт и записать в юзера

  return (
    <div style={{ border: '#27fc23 solid 2px' }}>
      <div>Header</div>
      {/* <div>
        <select value={theme} onChange={switchTheme}>
          <option>Light</option>
          <option>Dark</option>
          <option>Violet</option>
        </select>
      </div> */}
    </div>
  );
};

export default Header;
