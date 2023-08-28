import Calendar from 'components/calendar/calendar';
import css from './CreateCardPopUp.module.css';
import { useState } from 'react';

import sprite from '../img/svg/sprite-icon.svg';

const CustomRadio = ({ value, checked, onChange, color }) => {
  return (
    <label className={`${css.customRadio} ${checked ? css.checked : ''}`}>
      <input
        type="radio"
        name="radioGroup"
        value={value}
        checked={checked}
        onChange={onChange}
        className={css.hiddenRadio}
      />
      <svg className={`${css.customIcon}`} style={{ fill: `${color}` }}>
        <use
          xlinkHref={`${sprite}#radio-button-${
            checked ? 'checked' : 'unchecked'
          }`}
        />
      </svg>
    </label>
  );
};

export default function CreateCardPopUp() {
  const [selectedLabel, setSelectedLabel] = useState('without priority');
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const handleRadioChange = event => {
    setSelectedLabel(event.target.value);
  };

  return (
    <div className={css.modalBackdrop}>
      <div className={css.modalBody}>
        <span
          type="button"
          className={css.closeIconContainer}
          onClick={'onClose'}
        >
          <svg className={css.closeIcon}>
            <use xlinkHref={`${sprite}#plus`} />
          </svg>
        </span>

        <h3 className={css.modalTitle}>Add card</h3>
        <form action="" className={css.inputForm}>
          <input
            type="text"
            action=""
            placeholder="Title"
            value={titleValue}
            onChange={event => setTitleValue(event.target.value)}
            className={css.inputCardTitle}
          />
          <textarea
            type="text"
            action=""
            placeholder="Description"
            value={descriptionValue}
            onChange={event => setDescriptionValue(event.target.value)}
            className={css.inputCardDescription}
          />
          <div action="" className={css.inputLabelColorContainer}>
            <h4 className={css.inputLabelColor}>Label color</h4>
          </div>

          <CustomRadio
            color="#8fa1d04D"
            value="without priority"
            checked={selectedLabel === 'without priority'}
            onChange={handleRadioChange}
          />

          <CustomRadio
            color="#E09CB54D"
            value="low"
            checked={selectedLabel === 'low'}
            onChange={handleRadioChange}
          />

          <CustomRadio
            color="#BEDBB04D"
            value="medium"
            checked={selectedLabel === 'medium'}
            onChange={handleRadioChange}
          />

          <CustomRadio
            color="#FFFFFF4D"
            value="high"
            checked={selectedLabel === 'high'}
            onChange={handleRadioChange}
          />
        </form>

        <div className={css.deadlineContainer}>
          <h4 action="" className={css.deadlineTitle}>
            Deadline
          </h4>

          <Calendar />
          {/* <svg className={css.chevronDown}>
              <use xlinkHref={`${sprite}#chevron-down`} />
            </svg> */}
          {/* <CalendarCom /> */}
        </div>

        <button className={`${css.inputAddBtn} buttonWithIcon`}>
          <svg className={css.plusIcon}>
            <use xlinkHref={`${sprite}#plus`} />
          </svg>
          Add
        </button>
      </div>
    </div>
  );
}
