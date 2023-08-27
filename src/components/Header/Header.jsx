import ThemeChanger from 'components/ThemeChanger';
import React from 'react';

const Header = () => {
  return (
    <div style={{ border: '#27fc23 solid 2px' }}>
      <div>Header</div>
      <ThemeChanger />
    </div>
  );
};

export default Header;
