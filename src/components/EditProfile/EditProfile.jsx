import React from 'react';

// import { createPortal } from 'react-dom';
import { useUserData } from 'hooks/useUserData';

import css from './EditProfile.module.css';

// const modalRoot = document.querySelector('#modalRoot');

const EditProfile = () => {
  // useEffect(() => {
  //   const keyDown = event => {
  //     if (event.code === 'Escape') {
  //       onClose();
  //     }
  //   };

  //   window.addEventListener('keydown', keyDown);

  //   return () => {
  //     window.removeEventListener('keydown', keyDown);
  //   };
  // }, [onClose]);

  // const onOverlayClose = event => {
  //   if (event.currentTarget === event.target) {
  //     onClose();
  //   }
  // };

  // const modalClose = event => {
  //   onClose();
  // };

  const user = useUserData();

  return (
    // <div onClick={onOverlayClose} className={css.overlay}>
      <div className={css.modal}>
        <h2 className={css.titleName}>Edit profile</h2>
        {/* <button type="button" className={css.btnClose} onClick={modalClose}>
          Модалка ЗАКРОЙСЯ
        </button> */}
        <form className={css.formStyle}>
          <label className={css.labelStyle}>
            <input className={css.inputName} type="text" placeholder={user.name} />
          </label>
          <label className={css.labelStyle}>
            <input className={css.inputName} type="email" placeholder={user.email} />
          </label>
          <label className={css.labelStyle}>
            <input
              className={css.inputName}
              type="text"
              placeholder="Password"
            />
          </label>
          <button type="submit" className={css.btnAdd}>
            Send
          </button>
        </form>
      </div>
    // </div>,
    // modalRoot
  );
};

export default EditProfile;
