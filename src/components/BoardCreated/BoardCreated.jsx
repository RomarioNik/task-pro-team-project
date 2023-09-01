import React, { useEffect, useRef, useState } from 'react';
// import { Icon } from '../Svg/Icon';
import Column from 'components/Column/Column';
import style from './BoardCreated.module.css';
import 'overlayscrollbars/overlayscrollbars.css';
//import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

// import { OverlayScrollbars } from 'overlayscrollbars';
import Modal from 'components/Modal/Modal';
import AddColumn from 'components/AddColumn/AddColumn';

// import { OverlayScrollbars } from 'overlayscrollbars';

const BoardCreated = () => {
  const [isOpenCreateColumn, setIsOpenCreateColumn] = useState();
  // const [theme, setTheme] = useState('light');
  // const { boardName } = useParams();

  //----функція-відкривання-модалки-створення-колонки
  const createColumn = () => {
    setIsOpenCreateColumn(!isOpenCreateColumn);
  };

  // -------------------скрол-варіант-3-(не политів)-----------------------------------

  // useEffect(() => {
  //   const containerElement = document.querySelector('#style.column__container');
  //   const osInstance = OverlayScrollbars(containerElement, {});

  //   return () => {
  //     osInstance.destroy();
  //   };
  // }, []);

  // ------------------скрол-варіант-2-(не политів)-------------------------------------
  // OverlayScrollbars({
  //   target: document.querySelector('#column__item'),
  //   elements: {
  //     viewport: document.querySelector('#column__container'),
  //   },
  //  }, {});

  return (
    //---------------скрол 4 варіант-не-полетів-------
    //<OverlayScrollbarsComponent
    // element="Column"
    // options={{ scrollbars: { autoHide: 'never' } }}
    // events={{ scroll: () => {} }}
    // defer
    //>

    <div>
      <div className={style.column__container}>
        <div className={style.column__item}>
          <Column createColumn={createColumn} />
        </div>
        {/* <button
          className={style.button__create}
          type="button"
          onClick={createColumn}
        >
          <div className={style.button__icon__background}>
            <Icon id="plus" className={style.button__create__icon} />
          </div>
          <p className={style.button__create__title}>Add another column</p>
        </button> */}
      </div>
      {isOpenCreateColumn && (
        <Modal openModal={createColumn}>
          <AddColumn />
        </Modal>
      )}
    </div>

    //</OverlayScrollbarsComponent>
  );
};

export default BoardCreated;
