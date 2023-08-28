import React, { useState } from 'react';
import {Icon} from '../Svg/Icon';
import Column from 'components/Column/Column';
import icon from '../../img/svg/sprite-icon.svg';
import css from '../../../src/index.css';
import style from './BoardCreated.module.css';
import { useParams } from 'react-router-dom';


const BoardCreated = () => {
  // const [theme, setTheme] = useState('light');
  const { boardName } = useParams();


  // const switchTheme = e => {
  //   setTheme(e.target.value);
  // };
  //*отсюда передать тему в глобальній стейт и записать в юзера

  //----функція-відкривання-модалки-створення-колонки
  const createColumn = () => {
    console.log('add column');
  };


  return (
    <div style={{ border: '#161616 solid 2px' }}   >
       {/* <div>
        <select value={theme} onChange={switchTheme}>
          <option>Light</option>
          <option>Dark</option>
          <option>Violet</option>
        </select>
      </div> */}
      <div className={style.title__container}>
      <p className={style.title__board}>{boardName}</p>        
      </div>
      <div className={style.column__container}>
        <div className={style.column__item}>
             <Column />
        </div>       
        <button
          className={style.button__create}
          type="button"
          onClick={createColumn}
        ><div className={style.button__icon__background}>
        <Icon id='plus' className={style.button__create__icon}/>
        </div>
          <p className={style.button__create__title}>Add another column</p>
        </button>
      </div>
    
    </div>
  );
};

export default BoardCreated;
