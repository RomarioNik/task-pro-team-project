import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'components/Modal';

import Board from 'components/Board';
import BoardCreated from 'components/BoardCreated/BoardCreated.jsx';
import Filter from 'components/Filter';

// import BoardCreated from 'components/BoardCreated';
// import Filter from 'components/Filter/Filter';
import { Icon } from '../../components/Svg/Icon.jsx';
import style from './ScreensPage.module.css';
import { useShownBoard } from 'hooks/useShownBoard.js';
import { useDispatch } from 'react-redux';

const ScreensPage = () => {
  const [bgImage, setBgImages] = useState('');
  const [innerWidth, setInnerWidth] = useState(null);
  const [openFilter, setOpenFilter] = useState(false);
  const { boardName } = useParams();
  const { backgroundURL } = useShownBoard();
  const dispatch = useDispatch();

  const handleOpenFilter = () => {
    setOpenFilter(true);
    console.log('filter');
  };

  useEffect(() => {
    const handleResizePage = () => setInnerWidth(window.innerWidth);
    window.addEventListener('resize', handleResizePage);

    if (backgroundURL) {
      const isRetina = window.matchMedia('(min-resolution: 2dppx)').matches;
      setBgImages(() => {
        return isRetina ? backgroundURL.mobile_2x : backgroundURL.mobile_1x;
      });
      // MEDIA MOBILE
      if (
        window.matchMedia('(min-width: 375px) and (max-width: 767px)').matches
      ) {
        setBgImages(() => {
          return isRetina ? backgroundURL.tablet_2x : backgroundURL.tablet_1x;
        });
        return;
      }

      // MEDIA TABLET
      if (
        window.matchMedia('(min-width: 768px) and (max-width: 1439px)').matches
      ) {
        setBgImages(() => {
          return isRetina ? backgroundURL.desktop_2x : backgroundURL.desktop_1x;
        });

        return;
      }

      // MEDIA DESKTOP
      if (window.matchMedia('(min-width: 1440px)').matches) {
        setBgImages(() => {
          return backgroundURL.desktop_2x;
        });
        return;
      }
    }

    return () => {
      window.removeEventListener('resize', handleResizePage);
    };
  }, [backgroundURL, boardName, bgImage, innerWidth]);

  useEffect(() => {
    if (!boardName) dispatch();
  }, [boardName, dispatch]);

  return (
    <div
      className={style.screen__section}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {openFilter && (
        <Modal
          children={<Filter openModal={setOpenFilter} />}
          openModal={setOpenFilter}
        />
      )}

      <div className={style.title__container}>
        {boardName && (
          <>
            <span className={style.title__wrap}>
              <p className={style.title__board}>{boardName}</p>
            </span>
            <span className={style.title__wrap}>
              <button
                className={style.button__filter}
                type="button"
                onClick={handleOpenFilter}
              >
                <Icon id="filter" className={style.button__filter__icon} />
                <p className={style.button__filter__title}>Filters</p>
              </button>
            </span>
          </>
        )}
      </div>
      {/* <BoardCreated /> */}
      {!boardName ? <Board /> : <BoardCreated />}
    </div>
  );
};

export default ScreensPage;
