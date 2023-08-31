import React, { useEffect } from 'react';
import { Icon } from '../Svg/Icon';
import Column from 'components/Column/Column';
import style from './BoardCreated.module.css';


import { OverlayScrollbars } from 'overlayscrollbars';

const BoardCreated = () => {
  // const [theme, setTheme] = useState('light');
  // const { boardName } = useParams();
  
  //----функція-відкривання-модалки-створення-колонки
  const createColumn = () => {
    console.log('add column');
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
    <div>
      <div className={style.column__container}>
        <div className={style.column__item}>
          <Column />
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
    </div>
  );
};

export default BoardCreated;
