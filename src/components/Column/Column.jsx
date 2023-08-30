import React, { useRef } from 'react';
// import React, { useState } from 'react';
import style from './Column.module.css';
// import {Scroll} from '../Scroll/use-scroll.js'
import { Icon } from '../Svg/Icon';
import useScrollbar from '../Scroll/index';

const columns = [
  {
    name: 'To Do',
    id: '1',
  },
  {
    name: 'In progress',
    id: '2',
  },
  {
    name: 'Done',
    id: '3',
  },
  {
    name: 'Star',
    id: '4',
  },
];

const Column = () => {
 
  const addColumn = () => {
    console.log('Add column');
  };

  const columnWrapper = useRef(null)
  const hasScroll =  columns.length > 2;
 
useScrollbar(columnWrapper, hasScroll);

  return (
    <div style={{width: hasScroll ?  '300' : '500', minWidth: '900px'}} ref={columnWrapper}>
      <ul>
        {columns.map(({ name, id }) => (
          <li key={id} className={style.column}>
            <div className={style.column__section}>
              <p className={style.column_title}>{name}</p>
              <div className={style.column__edit__button}>
                <button>
                  <Icon id="pencil" className={style.column__icon} />
                </button>
                <button>
                  <Icon id="trash" className={style.column__icon} />
                </button>
              </div>
            </div>
            <button
              className={style.button_create}
              type="button"
              onClick={addColumn}
            >
              <div className={style.button__icon__background}>
                <Icon id="plus" className={style.button__create__icon} />
              </div>
              <p className={style.button_create_title}>Add another card</p>
            </button>
          </li>
        ))}
      </ul>
     </div>
  );
};

export default Column;
