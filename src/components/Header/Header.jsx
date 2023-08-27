import React, { useState } from 'react';
import css from './Header.module.css';
import icon from '../../img/svg/sprite-icon.svg';
import { Button } from 'components/Button/Button';
import { Select } from 'components/Select/Select';
const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Button className={css.menu_btn}>
          <svg width={24} height={24}>
            <use href={`${icon}#icon-menu`}></use>
          </svg>
        </Button>
        <div>
          <Select placeholder={'Theme'} />
        </div>
      </div>
    </header>
  );
};

export default Header;
