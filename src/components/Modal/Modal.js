import React, { useEffect } from 'react';
import style from './Modal.module.css';
import sprite from '../../img/svg/sprite-icon.svg';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, openModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        openModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      openModal();
    }
  };

  return createPortal(
    <div className={style.backdrop} onClick={handleBackdropClick}>
      <div className={style.modal}>
        <div className={style.closeIcon}>
          <svg className={style.icon} onClick={handleBackdropClick}>
            <use href={sprite + '#plus'} />
          </svg>
        </div>
        <div>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

/* <div id="modal-root"></div>; */

// import { useState } from 'react';
// import Modal from './Modal/Modal';
// import Filter from './Filter/Filter';

// const App = () => {
//     const [openModal, setOpenModal] = useState(false)

//     return (
//         <>
//             <p onClick={() => setOpenModal(true)}>Open</p>
//             {openModal && <Modal title={"Filter"} children={<Filter />} openModal={setOpenModal} />}
//         </>)
// }
