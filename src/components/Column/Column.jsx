import React, { useRef, useState } from 'react';
import { Icon } from '../Svg/Icon';
import useScrollbar from '../Scroll/index';
import 'overlayscrollbars/overlayscrollbars.css';
import Modal from 'components/Modal/Modal';
import AddColumn from 'components/AddColumn';
import style from './Column.module.css';

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
  // {
  //   name: 'Star',
  //   id: '4',
  // },
];

const cards = [
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
  // {
  //   name: 'Star',
  //   id: '4',
  // },
];

const Column = () => {
  const [isOpenModalAddColumn, setIsOpenModalAddColumn] = useState(false);

  const addColumn = () => {
    setIsOpenModalAddColumn(!isOpenModalAddColumn);
  };

  const addCard = () => {
    console.log('Add column');
  };

  //----------------скрол-віріант-1-(робочий)---------------------------
  const columnWrapper = useRef(null);
  const hasScroll = columns.length >= 1;

  useScrollbar(columnWrapper, hasScroll);

  return (
    <div
      style={{ width: hasScroll ? '100%' : 'auto', minWidth: '320px' }}
      ref={columnWrapper}
    >
      <ul className={style.column__item}>
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
            <div>
              <ul>
                {cards.map(({ name, id }) => (
                  <li key={id} className={style.card}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={style.button_create}
              type="button"
              onClick={addCard}
            >
              <div className={style.button__icon__background}>
                <Icon id="plus" className={style.button__create__icon} />
              </div>
              <p className={style.button_create_title}>Add another card</p>
            </button>
          </li>
        ))}
        <li>
          <button
            className={style.button__create__column}
            type="button"
            onClick={addColumn}
          >
            <div className={style.button__icon__bg}>
              <Icon id="plus" className={style.button__icon} />
            </div>
            <p className={style.button__title}>Add another column</p>
          </button>
        </li>
      </ul>
      {isOpenModalAddColumn && (
        <Modal>
          <AddColumn />
        </Modal>
      )}
    </div>
  );
};

export default Column;
