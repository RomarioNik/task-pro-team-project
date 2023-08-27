import css from './Select.module.css';
import icon from '../../img/svg/sprite-icon.svg';
import { useEffect, useState } from 'react';
import { Button } from 'components/Button/Button';

export const Select = ({
  option = ['Light', 'Dark', 'Violet'],
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // useEffect(() => {
  //   const handleClick = evt => {
  //     if (!evt.target.closest(`${css.select}`)) {
  //       console.log(evt.target.closest(`${css.select_btn}`));
  //       console.log(css.select);
  //     }
  //     return;
  //   };
  //   document.addEventListener('click', handleClick);
  //   // return document.removeEventListener('click', handleClick);
  // }, [isOpen]);

  const handlerIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const handlerSelectedOption = ({ target }) => {
    setSelectedOption(target.textContent);
    setIsOpen(false);
  };

  return (
    <div className={css.select}>
      <div className={css.select_btn} onClick={handlerIsOpen}>
        <p>
          {!selectedOption
            ? placeholder && typeof placeholder === 'string'
              ? placeholder
              : 'Select'
            : selectedOption}
        </p>
        <svg width={16} height={16}>
          <use href={`${icon}#chevron-down`}></use>
        </svg>
      </div>
      {isOpen && (
        <ul className={css.select_content}>
          {option.map((el, index) => (
            <li
              key={index}
              className={css.select_item}
              onClick={handlerSelectedOption}
            >
              {el}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
