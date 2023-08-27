import React, { useState } from 'react';
import {Icon} from '../../img/svg/Icon'
import icon from '../../img/svg/sprite-icon.svg'
import style from './BoardCreated.module.css'


const BoardCreated = () => {
  // const [theme, setTheme] = useState('light');

  // const switchTheme = e => {
  //   setTheme(e.target.value);
  // };
  //*отсюда передать тему в глобальній стейт и записать в юзера

  return (
    <div style={{ border: '#161616 solid 2px' }}>
      <div className={style.component}>Created Board component</div>
    

      {/* <div>
        <select value={theme} onChange={switchTheme}>
          <option>Light</option>
          <option>Dark</option>
          <option>Violet</option>
        </select>
      </div> */}
      <div className={style.title__container}>
      {/* <p className={style.title__board}>{BoardName}</p> */}
        <p className={style.title__board}>Project office</p>

        
      </div>
      <div className={style.column__container}>
        {/* <Column/> */}
        {/* <div>{Column}</div> */}
        <button
          className={style.button__create}
          type="button"
          // onClick={createColumn}
        ><div >
        <Icon id='plus' className={style.button__create__icon}/>
        </div>
          {/* <svg className={style.button__create__icon}>
            <use href={`${icon}#plus`}></use>
          </svg> */}
          <p className={style.button__create__title}>Add another column</p>
        </button>
      </div>
      <image src/>
    </div>
  );
};

export default BoardCreated;
