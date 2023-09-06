import React, { useState } from 'react';
import Modal from 'components/Modal';
import NewBoard from 'components/NewEditBoard/NewBoard';
import style from './Board.module.css';

const Board = () => {
  const [openNewBoardModal, setOpenEditBoardModal] = useState(false);

  const openModal = () => {
    setOpenEditBoardModal(!openNewBoardModal);
  };
  return (
    <div className={style.container}>
      Before starting your project, it is essential{' '}
      <button type="button" className={style.button_create} onClick={openModal}>
        {' '}
        to create a board{' '}
      </button>{' '}
      to visualize and track all the necessary tasks and milestones. This board
      serves as a powerful tool to organize the workflow and ensure effective
      collaboration among team members.
      <div>
        {openNewBoardModal && (
          <Modal openModal={openModal}>
            <NewBoard openModal={openModal} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Board;
