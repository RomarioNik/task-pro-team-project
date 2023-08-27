import React, { useState } from 'react';
import icon from '../../img/svg/sprite-icon.svg';
import style from './Column.module.css';

import {Icon} from '../../img/svg/Icon'

const Column = () => {
  // const [theme, setTheme] = useState('light');

  // const switchTheme = e => {
  //   setTheme(e.target.value);
  // };
  //*отсюда передать тему в глобальній стейт и записать в юзера

  return (
    <div style={{ border: '#161616 solid 2px' }}>
      <div className={style.component}>Column component</div>
      {/* <p className={style.board_title}>{BoardName}</p> */}
      <p className={style.board_title}>Project office</p>
      {/* <div>
        <select value={theme} onChange={switchTheme}>
          <option>Light</option>
          <option>Dark</option>
          <option>Violet</option>
        </select>
      </div> */}
      <ul>
        <li>
          <div className={style.column__section}>
            <p className={style.column_title}>To Do</p>
            <div className={style.column__title__button}>
              <button >
              <Icon id='pencil'className={style.column__icon}/>
                {/* <svg className={style.column__icon}>
                  <use href={`${icon}#pencil`}></use>
                </svg> */}
              </button>
              <button>
              <Icon id='trash'className={style.column__icon}/>
                {/* <svg className={style.column__icon}>
                  <use xlinkHref={`${icon}#trash`}></use>
                </svg> */}
              </button>
            </div>
          </div>
          {/* <div  className={style.icon__ejkbfewkjbwb} >
            <Icon id='radio-button'/>
          </div> */}
          <button className={style.button_create}
          
          type="button">
            <div>
            <Icon id='plus'className={style.button__create__icon}/>
            </div>
            {/* <svg className={style.button__create__icon}>
                  <use href={`${icon}#plus`}></use>
                </svg> */}
            Add another card</button>
        </li>
      </ul>
    </div>
  );
};

export default Column;
