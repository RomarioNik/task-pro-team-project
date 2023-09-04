import Calendar from 'components/calendar/calendar';
import css from './CreateCardPopUp.module.css';
import { useState } from 'react';

import sprite from '../../img/svg/sprite-icon.svg';
import { useDispatch } from 'react-redux';
import { addCard, updateCardById } from 'redux/boards/boardsOperations';

export function CreateCardPopUp({
   _id = '1',
  column = 'exampleid',
  isEditing = false, // Стан режиму редагування
  initialValues = {
    title: 'TEST TITLE',
    description: 'TEST description',
    priority: 'without priority',
    deadline: '05-09-2024',
  },
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
  console.log('formattedDeadline', formattedDeadline);


  const handleRadioChange = event => {
    setSelectedLabel(event.target.value);
  };

  const handleEditCard = () => {
    dispatch(
      updateCardById({
        _id,
        newBoardData: {
          title: titleValue,
          description: descriptionValue,
          priority: selectedLabel,
          deadline: formattedDeadline,
        },
      })
    );
    console.log('Редактировать карточку', {
      _id,
      title: titleValue,
      description: descriptionValue,
      priority: selectedLabel,
      deadline: formattedDeadline,
      column: column,
    });
  };

  const handleAddNewCard = () => {
    console.log('додаємо нову картку');

    // console.log({
    //   title: titleValue,
    //   description: descriptionValue,
    //   priority: selectedLabel,
    //   deadline: formattedDeadline,
    //   column: id,
    // });

    dispatch(
      addCard({
        title: titleValue,
        description: descriptionValue,
        priority: selectedLabel,
        deadline: formattedDeadline,
        column: _id,
      })
    );

    close();
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
