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

// =================for testing============================================================================

    //  const [openModal, setOpenModal] = useState(false)

  
    //     <>
    //         <p onClick={() => setOpenModal(true)}>Open</p>
    //         {openModal && <Modal title={"Filter"} children={<p>content of you modal window</p>} openModal={setOpenModal} />}
    //     </>
