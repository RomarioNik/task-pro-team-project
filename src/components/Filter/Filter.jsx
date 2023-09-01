import React, { useEffect } from 'react';
import style from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/boards/boardsSelectors';
import { addFilter } from 'redux/boards/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(getFilter);

  useEffect(() => {
    console.log(currentFilter);
  }, [currentFilter]);

  return (
    <>
      <h2 className={style.title}>Filters</h2>
      <div className={style.filterContainer}>
        <div className={style.filterListWrap}>
          <form
            onChange={e => dispatch(addFilter(e.target.value))}
            className={style.filterList}
          >
            <div className={style.radioBtn}>
              <h3 className={style.listTitle}>Label color</h3>
              <input
                value={'without priority'}
                className={style.visuallyHidden}
                type="radio"
                name="filter"
                id="without-priority"
                defaultChecked={
                  currentFilter === 'without priority' ? true : false
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
                value={'low'}
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
                value={'medium'}
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
                value={'high'}
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
                value={''}
                className={style.visuallyHidden}
                type="radio"
                name="filter"
              />
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default Filter;
