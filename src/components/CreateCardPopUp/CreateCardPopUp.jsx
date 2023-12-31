import Calendar from 'components/calendar/calendar';
import css from './CreateCardPopUp.module.css';
import { useState } from 'react';

import sprite from '../../img/svg/sprite-icon.svg';
import { useDispatch } from 'react-redux';
import { addCard, updateCardById } from 'redux/boards/boardsOperations';

export function CreateCardPopUp({
  _id,
  column,
  isEditing,
  initialValues,
  close,
}) {
  const dispatch = useDispatch();

  const [selectedLabel, setSelectedLabel] = useState(initialValues.priority);
  const [titleValue, setTitleValue] = useState(initialValues.title);
  const [descriptionValue, setDescriptionValue] = useState(
    initialValues.description
  );
  const [formattedDeadline, setFormattedDeadline] = useState(
    initialValues.deadline
  );

  const handleRadioChange = event => {
    setSelectedLabel(event.target.value);
  };

  const handleEditCard = () => {
    dispatch(
      updateCardById({
        _id,
        newCardData: {
          title: titleValue,
          description: descriptionValue,
          priority: selectedLabel,
          deadline: formattedDeadline,
        },
      })
    );
    close();
  };

  const handleAddNewCard = () => {
    dispatch(
      addCard({
        title: titleValue,
        description: descriptionValue,
        priority: selectedLabel,
        deadline: formattedDeadline,
        column,
      })
    );
    close();
  };

  return (
    <div>
      <h3 className={css.modalTitle}>{isEditing ? 'Edit card' : 'Add card'}</h3>
      <form action="submit" className={css.inputForm}>
        <input
          type="text"
          placeholder="Title"
          value={titleValue}
          onChange={event => setTitleValue(event.target.value)}
          className={css.inputCardTitle}
        />
        <textarea
          type="text"
          placeholder="Description"
          value={descriptionValue}
          onChange={event => setDescriptionValue(event.target.value)}
          className={css.inputCardDescription}
        />
        <div className={css.inputLabelColorContainer}>
          <h4 className={css.inputLabelColor}>Label color</h4>
        </div>

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

        <Calendar
          setFormattedDeadline={setFormattedDeadline}
          isEditing={isEditing}
          deadline={initialValues.deadline}
        />
      </div>
      <button
        className={`${css.inputAddBtn} buttonWithIcon`}
        onClick={isEditing ? handleEditCard : handleAddNewCard}
      >
        <div className={css.plusIconContainer}>
          <svg className={css.plusIcon}>
            <use xlinkHref={`${sprite}#plus`} />
          </svg>
        </div>
        {isEditing ? 'Edit' : 'Add'}
      </button>
    </div>
  );
}
export default CreateCardPopUp;
