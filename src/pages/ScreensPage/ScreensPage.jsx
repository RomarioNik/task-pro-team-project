import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'components/Modal';

import Board from 'components/Board';
import BoardCreated from 'components/BoardCreated/BoardCreated.jsx';
import Filter from 'components/Filter';

// import BoardCreated from 'components/BoardCreated';
// import Filter from 'components/Filter/Filter';
import { Icon } from '../../components/Svg/Icon.jsx';
import style from './ScreensPage.module.css';

const ScreensPage = () => {
  const { boardName } = useParams();

  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
    console.log('filter');
  };

  return (
    <div className={style.screen__section}>
      {openFilter && (
        <Modal
          children={<Filter openModal={setOpenFilter} />}
          openModal={setOpenFilter}
        />
      )}
      <div className={style.title__container}>
        <p className={style.title__board}>{boardName}</p>
        <button
          className={style.button__filter}
          type="button"
          onClick={handleOpenFilter}
        >
          <Icon id="filter" className={style.button__filter__icon} />
          <p className={style.button__filter__title}>Filter</p>
        </button>
      </div>
      {/* <BoardCreated /> */}
      {!boardName ? <Board /> : <BoardCreated />}
    </div>
  );
};

export default ScreensPage;
