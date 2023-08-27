import css from './Header.module.css';
import icon from '../../img/svg/sprite-icon.svg';
import { Button } from 'components/Button/Button';
import { Select } from 'components/Select/Select';
import Profile from '../Profile';
import ThemeChanger from 'components/ThemeChanger';
import { useUserData } from 'hooks/useUserData';
import React from 'react';

const Header = () => {
  const { name } = useUserData();
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Button className={css.menu_btn}>
          <svg className={css.header_iconMenu}>
            <use href={`${icon}#icon-menu`}></use>
          </svg>
        </Button>
        <div className={css.profile_container}>
          <Select placeholder={'Theme'} />
          <Profile />
        </div>
      </div>
    </header>
  );
};

export default Header;
