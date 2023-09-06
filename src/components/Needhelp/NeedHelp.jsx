import { useDispatch } from 'react-redux';
import css from './NeedHelp.module.css';
import { useState } from 'react';
import { sendNeedHelpLetter } from 'redux/auth/operations';
import { toast } from 'react-hot-toast';

export default function NeedHelp({ openModal }) {
  const [emailValue, setEmailValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const dispatch = useDispatch();

  const validateEmail = email => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = e => {
    e.preventDefault();

    let hasError = false;

    if (!validateEmail(emailValue)) {
      toast.error(`Invalid email address`);
      hasError = true;
    }

    if (!descriptionValue.trim()) {
      // setDescriptionError('Comment cannot be empty');
      toast.error(`Comment cannot be empty`);
      hasError = true;
    }

    if (!hasError) {
      dispatch(
        sendNeedHelpLetter({
          email: emailValue,
          comment: descriptionValue,
        })
      );
      openModal();
    }
  };
  return (
    <div>
      <h3 className={css.modalTitle}>Need help</h3>
      <form className={css.inputForm}>
        <input
          type="text"
          placeholder="Email address"
          value={emailValue}
          onChange={event => setEmailValue(event.target.value)}
          className={css.inputCardTitle}
        />

        <textarea
          type="text"
          placeholder="Comment"
          value={descriptionValue}
          onChange={event => setDescriptionValue(event.target.value)}
          className={css.inputCardDescription}
        />

        <button
          type="submit"
          onClick={handleSubmit}
          className={css.inputAddBtn}
        >
          Send
        </button>
      </form>
    </div>
  );
}
