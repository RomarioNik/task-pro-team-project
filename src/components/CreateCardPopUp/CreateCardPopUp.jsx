import Calendar from 'components/calendar/calendar';
import css from './CreateCardPopUp.module.css';
import { useState } from 'react';

import sprite from '../../img/svg/sprite-icon.svg';
import { useDispatch } from 'react-redux';
import { addCard } from 'redux/boards/boardsOperations';
// import { addBoard } from 'redux/boards/boardsOperations';

export default function CreateCardPopUp({
  id = '1',
  boardName = 'test',
  deadline = 'test',
  column = 'exampleid',
}) {
  const dispatch = useDispatch();

  const [selectedLabel, setSelectedLabel] = useState('without priority');
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [formattedDeadline, setFormattedDeadline] = useState('');
  console.log('formattedDeadline', formattedDeadline);

  const handleRadioChange = event => {
    setSelectedLabel(event.target.value);
  };

  const AddNewCard = () => {
    console.log('додаємо нову картку');

    console.log({
      title: titleValue,
      description: descriptionValue,
      priority: selectedLabel,
      deadline: formattedDeadline,
      column: column,
    });

    dispatch(
      addCard({
        title: titleValue,
        description: descriptionValue,
        priority: selectedLabel,
        deadline: formattedDeadline,
        column: column,
      })
    );
  };

  return (
    <div>
      <h3 className={css.modalTitle}>Add card</h3>
      <form action="submit" className={css.inputForm}>
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

        {/* <CustomRadio
          color="#8fa1d04D"
          value="without priority"
          checked={selectedLabel === 'without priority'}
          onChange={handleRadioChange}
          id={'without'}
        /> */}

        <label className={`${css.customRadio}`}>
          <input
            type="radio"
            name="radioGroup"
            value="without priority"
            onChange={handleRadioChange}
            checked={selectedLabel === 'without priority'}
            className={css.hiddenRadio}
          />

          {selectedLabel === 'without priority' ? (
            <svg className={css.customIconchekedwithout}>
              <use xlinkHref={`${sprite}#radio-button-checked`} />
            </svg>
          ) : (
            <svg className={css.customIconUncheckedWithout}>
              <use xlinkHref={`${sprite}#radio-button-unchecked`} />
            </svg>
          )}
        </label>

        <label className={`${css.customRadio}`}>
          <input
            type="radio"
            name="radioGroup"
            value="low"
            onChange={handleRadioChange}
            checked={selectedLabel === 'low'}
            className={css.hiddenRadio}
          />

          {selectedLabel === 'low' ? (
            <svg className={css.customIconchekedlow}>
              <use xlinkHref={`${sprite}#radio-button-checked`} />
            </svg>
          ) : (
            <svg className={css.customIconUncheckedLow}>
              <use xlinkHref={`${sprite}#radio-button-unchecked`} />
            </svg>
          )}
        </label>

        <label className={`${css.customRadio}`}>
          <input
            type="radio"
            name="radioGroup"
            value="medium"
            onChange={handleRadioChange}
            checked={selectedLabel === 'medium'}
            className={css.hiddenRadio}
          />

          {selectedLabel === 'medium' ? (
            <svg className={css.customIconchekedmedium}>
              <use xlinkHref={`${sprite}#radio-button-checked`} />
            </svg>
          ) : (
            <svg className={css.customIconUncheckedmedium}>
              <use xlinkHref={`${sprite}#radio-button-unchecked`} />
            </svg>
          )}
        </label>

        <label className={`${css.customRadio}`}>
          <input
            type="radio"
            name="radioGroup"
            value="high"
            onChange={handleRadioChange}
            checked={selectedLabel === 'high'}
            className={css.hiddenRadio}
          />

          {selectedLabel === 'high' ? (
            <svg className={css.customIconchekedhigh}>
              <use xlinkHref={`${sprite}#radio-button-checked`} />
            </svg>
          ) : (
            <svg className={css.customIconUncheckedHigh}>
              <use xlinkHref={`${sprite}#radio-button-unchecked`} />
            </svg>
          )}
        </label>
      </form>

      <div className={css.deadlineContainer}>
        <h4 action="" className={css.deadlineTitle}>
          Deadline
        </h4>

        <Calendar setFormattedDeadline={setFormattedDeadline} />
      </div>
      <button
        className={`${css.inputAddBtn} buttonWithIcon`}
        onClick={AddNewCard}
      >
        <div className={css.plusIconContainer}>
          <svg className={css.plusIcon}>
            <use xlinkHref={`${sprite}#plus`} />
          </svg>
        </div>
        Add
      </button>
    </div>
  );
}

// const CustomRadio = ({ value, checked, onChange, color, id }) => {
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

//       {checked ? (
//         <svg
//           className={`${css.customIconcheked} ${css.id}`}
//           style={{ fill: `${color}` }}
//         >
//           <use xlinkHref={`${sprite}#radio-button-checked`} />
//         </svg>
//       ) : (
//         <svg className={`${css.customIcon}`} style={{ fill: `${color}` }}>
//           <use xlinkHref={`${sprite}#radio-button-unchecked`} />
//         </svg>
//       )}

//     </label>
//   );
// };
