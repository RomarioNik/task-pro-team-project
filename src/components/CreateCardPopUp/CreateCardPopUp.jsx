import Calendar from 'components/calendar/calendar';
import css from './CreateCardPopUp.module.css';
import { useState } from 'react';

import sprite from '../img/svg/sprite-icon.svg';

// import Icon from '../img/svg/Icon.jsx';

// const CustomRadio = ({ value, checked, onChange }) => {
//   return (
//     <label className={`${css.customRadio} ${checked ? css.checked : ''}`}>
//       <input
//         type="radio"
//         name="radioGroup"
//         value={value}
//         checked={checked}
//         onChange={onChange}
//         className={css.hiddenRadio}
//       />
//       <svg className={css.customIcon}>
//         <use xlinkHref={`${sprite}#radio-button`} />
//       </svg>
//     </label>
//   );
// };

const CustomRadio = ({ value, checked, onChange, color }) => {
  return (
    <label
      className={`${css.customRadio} ${checked ? css.checked : ''}`}
      style={{ color }}
    >
      <input
        type="radio"
        name="radioGroup"
        value={value}
        checked={checked}
        onChange={onChange}
        className={css.hiddenRadio}
      />
      <svg className={css.customIcon}>
        <use
          xlinkHref={
            // `${sprite}#radio-button`
            `${sprite}#radio-button${value}-${
              checked ? 'checked' : 'unchecked'
            }`
          }
        />
      </svg>
    </label>
  );
};

export default function CreateCardPopUp() {
  const [selectedLabel, setSelectedLabel] = useState('Default');

  const handleRadioChange = event => {
    setSelectedLabel(event.target.value);
    console.log(selectedLabel);
  };

  return (
    <div className={css.modalBackdrop}>
      <div className={css.modalBody}>
        <h3 className={css.modalTitle}>Add card</h3>
        <form action="" className={css.inputForm}>
          <input
            type="text"
            action=""
            placeholder="Title"
            className={css.inputCardTitle}
          />
          <textarea
            type="text"
            action=""
            placeholder="Description"
            className={css.inputCardDescription}
          />
          <div action="" className={css.inputLabelColorContainer}>
            <h4 className={css.inputLabelColor}>Label color</h4>

            <input
              type="radio"
              name="radioGroup"
              value="Default"
              checked={selectedLabel === 'Default'}
              onChange={handleRadioChange}
              className={css.radioOptionDefault}
            />

            <input
              type="radio"
              name="radioGroup"
              value="Low"
              checked={selectedLabel === 'Low'}
              onChange={handleRadioChange}
              className={css.radioOptionLow}
            />

            <input
              type="radio"
              name="radioGroup"
              value="Medium"
              checked={selectedLabel === 'Medium'}
              onChange={handleRadioChange}
              className={css.radioOptionMedium}
            />

            <input
              type="radio"
              name="radioGroup"
              value="High"
              color="red"
              background-color="blue"
              checked={selectedLabel === 'High'}
              onChange={handleRadioChange}
              className={css.radioOptionHigh}
            />
          </div>

          <CustomRadio
            color="black"
            value="Default"
            checked={selectedLabel === 'Default'}
            onChange={handleRadioChange}
          />

          <CustomRadio
            color="black"
            value="Low"
            checked={selectedLabel === 'Low'}
            onChange={handleRadioChange}
          />

          <CustomRadio
            color="black"
            value="Medium"
            checked={selectedLabel === 'Medium'}
            onChange={handleRadioChange}
          />

          <CustomRadio
            color="black"
            value="High"
            checked={selectedLabel === 'High'}
            onChange={handleRadioChange}
          />
        </form>

        <div className={css.deadlineContainer}>
          <h4 action="" className={css.deadlineTitle}>
            Deadline
          </h4>
          <div className={css.calendarContainer}>
            <Calendar />
            {/* <svg className={css.chevronDown}>
              <use xlinkHref={`${sprite}#chevron-down`} />
            </svg> */}
          </div>
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
