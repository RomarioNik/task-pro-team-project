import React, { useRef } from 'react';
import useScrollbar from '../Scroll/index';
import 'overlayscrollbars/overlayscrollbars.css';
import style from './Card.module.css';

const cards = [
  {
    name: 'Card 1',
    id: '1',
  },
  {
    name: 'Card 2',
    id: '2',
  },
  {
    name: 'Card 3',
    id: '3',
  },
  {
    name: 'Card 4',
    id: '4',
  },
];

const Card = () => {
  //----------------скрол-віріант-1-(робочий)---------------------------
  const columnWrapper = useRef(null);
  const hasScroll = cards.length >= 3;

  useScrollbar(columnWrapper, hasScroll);

  return (
    <div
      style={{ height: hasScroll ? '100%' : 'auto', minHeight: '478px' }}
      ref={columnWrapper}
    >
      <ul className={style.card__item}>
        {cards.map(({ name, id }) => (
          <li key={id} className={style.card}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
