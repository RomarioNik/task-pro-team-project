import { useDispatch } from 'react-redux';
import css from './NeedHelp.module.css';
import { useState } from 'react';
import { sendNeedHelpLetter } from 'redux/auth/operations';

export default function NeedHelp() {
  const [emailValue, setamEilValueValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [emailError, setEmailError] = useState('');
  const dispatch = useDispatch();

  const validateEmail = email => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (validateEmail(emailValue)) {
      dispatch(
        sendNeedHelpLetter({
          email: emailValue,
          comment: descriptionValue,
        })
      );
      setEmailError('');
    } else {
      setEmailError('Invalid email address');
    }
  };

  return (
    <div>
      <h3 className={css.modalTitle}>Need help</h3>
      <form action="" className={css.inputForm}>
        <input
          type="text"
          action=""
          placeholder="Email address"
          value={emailValue}
          onChange={event => setamEilValueValue(event.target.value)}
          className={css.inputCardTitle}
        />
        {emailError && <p className={css.errorText}>{emailError}</p>}
        <textarea
          type="text"
          action=""
          placeholder="Comment"
          value={descriptionValue}
          onChange={event => setDescriptionValue(event.target.value)}
          className={css.inputCardDescription}
        />
        <button
          type="submit"
          onSubmit={handleSubmit}
          className={css.inputAddBtn}
        >
          Send
        </button>
      </form>
    </div>
  );
}
