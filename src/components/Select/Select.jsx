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
  //   document.addEventListener('click', handleClick);
  //   // return document.removeEventListener('click', handleClick);
  // }, []);

  const handlerIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const handlerSelectedOption = ({ target }) => {
    setSelectedOption(target.textContent);
    setIsOpen(false);
  };
  const handleClick = evt => {
    console.log(evt.target, evt.currentTarget);
    if (evt.target !== evt.currentTarget) {
      console.log('Закрываю');
    }
  };
  return (
    <div className={css.select} onClick={handleClick}>
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
