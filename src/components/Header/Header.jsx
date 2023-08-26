import React, { useState } from 'react';
import css from './Header.module.css';
import {
  AppBar,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledEngineProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { width } from '@mui/system';
import icon from '../../img/svg/sprite-icon.svg';

const Header = () => {
  const cache = createCache({ key: 'css', prepend: true });

  return (
    <header className={css.header}>
      <div className={css.container}>
        <button type="button">
          <svg width={24} height={24}>
            <use href={`${icon}#icon-menu`}></use>
          </svg>
        </button>
      </div>
    </header>

    // <CacheProvider value={cache}>
    //   <StyledEngineProvider injectFirst>
    //     <AppBar position="relative">
    //       <Toolbar className={css.header}>
    //         <IconButton size="small" edge="start" aria-label="menu">
    //           <MenuIcon injectFirst className={css.header_iconMenu} />
    //         </IconButton>
    //         <FormControl sx={{ width: 68 }}>
    //           {/* <InputLabel>Theme</InputLabel> */}
    //           <Select displayEmpty></Select>
    //         </FormControl>
    //       </Toolbar>
    //     </AppBar>
    //   </StyledEngineProvider>
    // </CacheProvider>
  );
};

export default Header;
