import ThemeChanger from 'components/ThemeChanger';
import { useUserData } from 'hooks/useUserData';
import React from 'react';

const Header = () => {
  const { name } = useUserData();
  return (
    <div style={{ display: 'flex', gap: '30px', border: '#27fc23 solid 2px' }}>
      <div>Header</div>

      <ThemeChanger />
      <div>{name}</div>
    </div>
  );
};

export default Header;
