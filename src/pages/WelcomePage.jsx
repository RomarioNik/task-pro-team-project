import React from 'react';
import css from './WelcomePage.module.css';
import { Link } from 'react-router-dom';
import {
  startUser_124,
  startUser_x2_248,
  startUser_desctop_162,
  startUser_x2_desctop_324,
} from 'img/png';
import icon from '../img/svg/sprite-icon.svg';

const WelcomePage = () => {
  return (
    <>
      <div className={css.welcomPage}>
        <div className={css.container}>
          <img
            src={startUser_124}
            alt="user icon start page"
            className={css.welcomPage_user}
            srcSet={`${startUser_124} 124w , ${startUser_x2_248} 248w , ${startUser_desctop_162} 162w , ${startUser_x2_desctop_324} 324w`}
            sizes=" (min-width: 768px) 162px , (min-width: 375px) 124px"
          />
          <div className={css.logo}>
            <svg className={css.logo_icon}>
              <use href={`${icon}#logo`}></use>
            </svg>

            <p>Task Pro</p>
          </div>
          <p className={css.welcomPage_desc}>
            Supercharge your productivity and take control of your tasks with
            Task Pro - Don't wait, start achieving your goals now!
          </p>

          <ul className={css.welcomPage_list}>
            <li>
              <Link to="auth/register" className={`${css.item} ${css.active}`}>
                Register
              </Link>
            </li>
            <li>
              <Link to="auth/login" className={css.item}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
