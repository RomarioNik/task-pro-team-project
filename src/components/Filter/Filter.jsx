import React, { useEffect } from 'react';
import style from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/boards/boardsSelectors';
import { addFilter } from 'redux/boards/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  // ===============Перевірка фільтрації
  const currentFilter = useSelector(getFilter);
  const cards = [
    [
      { id: 'first', priority: 'high', name: 'card-11' },
      { id: 'first', priority: 'low', name: 'card-12' },
      { id: 'first', priority: 'high', name: 'card-13' },
      { id: 'first', priority: 'high', name: 'card-14' },
      { id: 'first', priority: 'medium', name: 'card-15' },
      { id: 'first', priority: 'without priority', name: 'card-16' },
      { id: 'first', priority: 'high', name: 'card-17' },
    ],
    [
      { id: 'second', priority: 'without priority', name: 'card-21' },
      { id: 'second', priority: 'low', name: 'card-22' },
      { id: 'second', priority: 'high', name: 'card-23' },
      { id: 'second', priority: 'low', name: 'card-24' },
      { id: 'second', priority: 'without-priority', name: 'card-25' },
      { id: 'second', priority: 'without-priority', name: 'card-26' },
      { id: 'second', priority: 'medium', name: 'card-27' },
    ],
    [
      { id: 'third', priority: 'low', name: 'card-31' },
      { id: 'third', priority: 'low', name: 'card-32' },
      { id: 'third', priority: 'without priority', name: 'card-33' },
      { id: 'third', priority: 'high', name: 'card-34' },
      { id: 'third', priority: 'medium', name: 'card-35' },
      { id: 'third', priority: 'without priority', name: 'card-36' },
      { id: 'third', priority: 'high', name: 'card-37' },
    ],
  ];

  const filtered = (f, cards) => {
    if (f === null) {
      return cards;
    }
    const filteredCards = cards.map(card => {
      const res = card.filter(card => {
        return card.priority === f;
      });
      return res;
    });

    return filteredCards;
  };

  const result = filtered(currentFilter, cards);

  useEffect(() => {
    console.log(result);
    console.log(currentFilter);
  }, [currentFilter, result]);

  return (
    <>
      <h2 className={style.title}>Filters</h2>
      <div className={style.filterContainer}>
        <div className={style.filterListWrap}>
          <form
            onChange={e => dispatch(addFilter(e.target.id))}
            className={style.filterList}
          >
            <div className={style.radioBtn}>
              <h3 className={style.listTitle}>Label color</h3>
              <input
                className={style.visuallyHidden}
                type="radio"
                name="filter"
                id="without-priority"
                defaultChecked={
                  currentFilter === 'without-priority' ? true : false
                }
              />
              <label
                htmlFor="without-priority"
                className={style.filterListItem}
              >
                <span
                  style={{ backgroundColor: 'var(--modal-level-color)' }}
                  className={style.inputBtn}
                ></span>
                Without priority
              </label>
              <input
                className={style.visuallyHidden}
                type="radio"
                name="filter"
                id="low"
                defaultChecked={currentFilter === 'low' ? true : false}
              />
              <label htmlFor="low" className={style.filterListItem}>
                <span
                  style={{ backgroundColor: '#8fa1d0' }}
                  className={style.inputBtn}
                ></span>
                Low
              </label>
              <input
                className={style.visuallyHidden}
                type="radio"
                name="filter"
                id="medium"
                defaultChecked={currentFilter === 'medium' ? true : false}
              />
              <label htmlFor="medium" className={style.filterListItem}>
                <span
                  style={{ backgroundColor: '#e09cb5 ' }}
                  className={style.inputBtn}
                ></span>
                Medium
              </label>
              <input
                className={style.visuallyHidden}
                type="radio"
                name="filter"
                id="high"
                defaultChecked={currentFilter === 'high' ? true : false}
              />
              <label htmlFor="high" className={style.filterListItem}>
                <span
                  style={{ backgroundColor: '#bedbb0 ' }}
                  className={style.inputBtn}
                ></span>
                High
              </label>
            </div>
            <label className={style.btn}>
              Show all
              <input
                className={style.visuallyHidden}
                value={null}
                type="radio"
                name="filter"
                id="null"
              />
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default Filter;
