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
        <button type="button" className={style.closeIcon} onClick={handleBackdropClick}>
          <svg className={style.icon}>
            <use href={sprite + '#plus'} />
          </svg>
        </button>
        <div>{children}</div>
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
