import React, { useEffect } from 'react';
import style from './Modal.module.css';
import sprite from '../../img/svg/sprite-icon.svg';
import { createPortal } from 'react-dom';
import { useUserData } from 'hooks/useUserData';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, openModal }) => {
  const { userTheme } = useUserData();

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
    <div
      className={style.backdrop}
      onClick={handleBackdropClick}
      data-theme={userTheme}
    >
      <div className={style.modal}>
        <button
          type="button"
          className={style.closeIcon}
          onClick={() => openModal()}
        >
          <svg className={style.icon}>
            <use href={sprite + '#plus'} />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

// =================for testing============================================================================

//  const [openModal, setOpenModal] = useState(false)

//     <>
//         <p onClick={() => setOpenModal(true)}>Open</p>
//         {openModal && <Modal children={<YOU MODAL COMPONENT/>} openModal={setOpenModal} />}
//     </>
