import css from './Select.module.css';
import icon from '../../img/svg/sprite-icon.svg';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from 'redux/auth/operations';
import { useUserData } from 'hooks/useUserData';

export const Select = ({ option = [], placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { userTheme } = useUserData();

  const dispatch = useDispatch();
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = evt => {
      if (isOpen && ref.current && !ref.current.contains(evt.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  const handlerIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const handlerSelectedOption = ({ target }) => {
    const newTheme = target.textContent.toLowerCase();
    if (newTheme === userTheme) return;

    dispatch(changeTheme({ userTheme: newTheme }));

    setIsOpen(false);
  };

  return (
    <div className={css.select} ref={ref}>
      <button className={css.select_btn} onClick={handlerIsOpen}>
        {/* {!selectedOption
            ? placeholder && typeof placeholder === 'string'
              ? placeholder
              : 'Select'
            : selectedOption} */}
        {placeholder}

        <svg width={16} height={16}>
          <use href={`${icon}#chevron-down`}></use>
        </svg>
      </button>
      {isOpen && (
        <ul className={css.select_content}>
          {option.map((el, index) => (
            <li key={index}>
              <button
                className={`${css.select_item} ${
                  el.toLowerCase() === userTheme ? css.selected_item : ''
                }  `}
                onClick={handlerSelectedOption}
              >
                {el}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
