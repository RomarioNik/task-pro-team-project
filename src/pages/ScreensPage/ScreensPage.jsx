import React from 'react';
import { useParams } from 'react-router-dom';
import Board from 'components/Board';
import BoardCreated from 'components/BoardCreated';
import Column from 'components/Column';
import icon from '../../img/svg/sprite-icon.svg';
import style from './ScreensPage.module.css';

const ScreensPage = () => {
  const { boardName } = useParams();
  console.log(boardName);

  //-----тестовий-масив-колонок----
  // const HeaderDashboard = {

  // [ progect: {};
  //   star: {};
  //   loading: {};
  //   puzzle: {};
  //   container: {};
  //   lightning: {};
  //   colors: {};
  //   hexagon: {};
  // ]
  //};

  //----функція-відкривання-модалки-фільтра
  const filter = () => {
    console.log('filter');
  };
  //----функція-відкривання-модалки-створення-колонки
  // const createColumn = () => {
  //   console.log('add column');
  // };

  return (
    <div style={{ border: '#fc4e23 solid 2px' }}>
      <div>ScreensPage</div>
      {/* <p>Board Name = {boardName}</p> */}
      <button className={style.button__filter} type="button" onClick={filter}>
        <svg className={style.button__filter__icon}>
          <use href={`${icon}#filter`}></use>
        </svg>
        <p className={style.button__filter__title}>Filter</p>
      </button>
      <Board />
      <BoardCreated />
      <Column />
    </div>
  );
};

export default ScreensPage;
