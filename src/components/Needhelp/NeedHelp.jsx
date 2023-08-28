import Calendar from 'components/calendar/calendar';
import css from './CreateCardPopUp.module.css';
import { useState } from 'react';

export default function NeedHelp() {
  const [selectedLabel, setSelectedLabel] = useState('Default');
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  return (
    <div className={css.modalBody}>
      <h3 className={css.modalTitle}>Need help</h3>
      <form action="" className={css.inputForm}>
        <input
          type="text"
          action=""
          placeholder="Email address"
          value={titleValue}
          onChange={event => setTitleValue(event.target.value)}
          className={css.inputCardTitle}
        />
        <textarea
          type="text"
          action=""
          placeholder="Comment"
          value={descriptionValue}
          onChange={event => setDescriptionValue(event.target.value)}
          className={css.inputCardDescription}
        />
      </form>

      <button className={css.inputAddBtn}>Send</button>
    </div>
  );
}
