import React from 'react';
import { useParams } from 'react-router-dom';
import Board from 'components/Board';
import BoardCreated from 'components/BoardCreated';
import {Icon} from '../../components/Svg/Icon'
import style from './ScreensPage.module.css';

const ScreensPage = () => {
  const { boardName} = useParams();
  console.log(boardName);
 
  
  //----функція-відкривання-модалки-фільтра
  const filter = () => {
    console.log('filter');
  };

  return (
    <div className={style.screen__section}>
      <button className={style.button__filter} type="button" onClick={filter}>
      <Icon id='filter'className={style.button__filter__icon}/>
       <p className={style.button__filter__title}>Filter</p>
      </button>
  
      {boardName ? <BoardCreated />  : <Board /> }  
    
    </div>
  );
};

export default ScreensPage;
