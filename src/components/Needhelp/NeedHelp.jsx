import { useDispatch } from 'react-redux';
import css from './NeedHelp.module.css';
import { useState } from 'react';
import { sendNeedHelpLetter } from 'redux/auth/operations';

export default function NeedHelp() {
  const [emailValue, setamEilValueValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [emailError, setEmailError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const dispatch = useDispatch();

  const validateEmail = email => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (descriptionValue.length === 0) {
      setDescriptionError('Please enter a description.');
      return;
    } else {
      setDescriptionError('');
    }
    if (validateEmail(emailValue)) {
      console.log({
        email: emailValue,
        comment: descriptionValue,
      });

      dispatch(
        sendNeedHelpLetter({
          email: emailValue,
          comment: descriptionValue,
        })
      );
      setEmailError('');
    } else {
      setEmailError('Invalid email address');
      console.log(emailError);
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
        {descriptionError && (
          <p className={css.errorText}>{descriptionError}</p>
        )}
        <button
          type="button"
          onClick={handleSubmit}
          className={css.inputAddBtn}
        >
          Send
        </button>
      </form>
    </div>
  );
}
