import React, { useState } from 'react';
import style from './Filter.module.css';
import sprite from '../../img/svg/symbol-defs.svg';

const Filter = () => {
  const [filter, setFilter] = useState(null);

  const setFilterValue = evt => {
    setFilter(evt.target.value);
  };

  const onSubmitHandle = evt => {
    evt.preventDefault();
    setFilter(null);
    console.log(filter);
  };

  return (
    <div className={style.backdrop}>
      <div className={style.filter}>
        <div className={style.closeIcon}>
          <svg className={style.icon}>
            <use href={sprite + '#plus'} />
          </svg>
        </div>
        <h2 className={style.title}>Filters</h2>
        <form
          onChange={setFilterValue}
          onSubmit={onSubmitHandle}
          className={style.filterContainer}
        >
          <div className={style.filterListWrap}>
            <h3 className={style.listTitle}>Label color</h3>
            <div className={style.filterList}>
              <input
                className={style.visuallyHidden}
                value="without-priority"
                type="radio"
                name="filter"
                id="without-priority"
              />
              <label for="without-priority" className={style.filterListItem}>
                <span
                  //   style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                  style={{ backgroundColor: 'rgba(22, 22, 22, 0.3)' }}
                  className={style.inputBtn}
                ></span>
                Without priority
              </label>
              <input
                className={style.visuallyHidden}
                value="low"
                type="radio"
                name="filter"
                id="low"
              />
              <label for="low" className={style.filterListItem}>
                <span
                  style={{ backgroundColor: '#8fa1d0' }}
                  className={style.inputBtn}
                ></span>
                Low
              </label>
              <input
                className={style.visuallyHidden}
                value="medium"
                type="radio"
                name="filter"
                id="medium"
              />
              <label for="medium" className={style.filterListItem}>
                <span
                  style={{ backgroundColor: '#e09cb5 ' }}
                  className={style.inputBtn}
                ></span>
                Medium
              </label>
              <input
                className={style.visuallyHidden}
                value="high"
                type="radio"
                name="filter"
                id="high"
              />
              <label for="high" className={style.filterListItem}>
                <span
                  style={{ backgroundColor: '#bedbb0 ' }}
                  className={style.inputBtn}
                ></span>
                High
              </label>
            </div>
          </div>
          <button className={style.btn} type="submit">
            Show all
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
