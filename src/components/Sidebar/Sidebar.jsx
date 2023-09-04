import { Link, NavLink, useNavigate } from 'react-router-dom';

import React, { useEffect, useRef, useState } from 'react';

import css from './Sidebar.module.css';
import sprite from '../../img/svg/sprite-icon.svg';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/operations';

import {
  deleteBoard,
  getAllBoards,
  getBoardById,
  // addBoard,
} from '../../redux/boards/boardsOperations';
import { useBoardsList } from 'hooks/useBoardsList';
import Modal from '../Modal/index.js';
import NeedHelp from '../Needhelp/NeedHelp';
import NewBoard from '../NewEditBoard/NewBoard';
import EditBoard from 'components/NewEditBoard/EditBoard';

const Sidebar = ({ closeSidebar, isOpenMenu }) => {
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const [openNeedHelpModal, setOpenNeedHelpModal] = useState(false);
  const [openNewBoardModal, setOpenNewBoardModal] = useState(false);
  const [openEditBoardModal, setOpenEditBoardModal] = useState(false);

  const dispatch = useDispatch();

  const boards = useBoardsList();

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  // useEffect(() => {
  //   if (boards.length > 0) {
  //     navigate(`${boards[0].title}`);
  //   }
  // }, [boards.length]);

  const handleCreateBoard = () => {
    setOpenNewBoardModal(true);

    // const newBoard = {
    //   title: 'Test new board 4',
    //   icon: 'project',
    //   background: 'magnolia',
    // };
    // dispatch(addBoard(newBoard));
  };

  const handleNeedHelp = () => {
    setOpenNeedHelpModal(true);
  };

  const handleEditBoard = () => {
    setOpenEditBoardModal(true);
  };

  const handleLogout = () => {
    dispatch(logOutUser());
    navigate('/');
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      menuRef.current.classList.toggle(css.close);
      setTimeout(() => {
        closeSidebar();
      }, 300);
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div
        ref={menuRef}
        className={`${css.sidebar} ${isOpenMenu ? css.open : ''}`}
      >
        {openNeedHelpModal && (
          <Modal children={<NeedHelp />} openModal={setOpenNeedHelpModal} />
        )}
        {openNewBoardModal && (
          <Modal openModal={setOpenNewBoardModal}>
            <NewBoard openModal={setOpenNewBoardModal} />
          </Modal>
        )}
        {openEditBoardModal && (
          <Modal openModal={setOpenEditBoardModal}>
            <EditBoard openModal={setOpenEditBoardModal}></EditBoard>
          </Modal>
        )}
        <Link to="/home" className={css.logo}>
          <svg width="32" height="32" className={css.logoIcon}>
            <use xlinkHref={`${sprite}#logo`} />
          </svg>
          <p className={css.logoText}>TaskPro</p>
        </Link>

        <div className={css.myBoards}>
          <p className={css.myBoardsText}>My Boards</p>
          <div className={css.createBoardSection}>
            <p className={css.createBoardText}>Create a new board</p>
            <button
              className={css.createBoardButton}
              onClick={handleCreateBoard}
            >
              <svg width="20" height="20" className={css.addIcon}>
                <use xlinkHref={`${sprite}#plus`} />
              </svg>
            </button>
          </div>
          <ul className={css.boardsList}>
            {boards.map(({ _id, title, icon }) => (
              <li key={_id}>
                <NavLink
                  to={`${title}`}
                  className={({ isActive }) =>
                    isActive ? css.active : css.boardsItem
                  }
                  onClick={() => {
                    dispatch(getBoardById(_id));
                  }}
                >
                  <div className={css.boardTitle}>
                    <svg width="18" height="18" className={css.boardIcon}>
                      <use xlinkHref={`${sprite}#${icon}`} />
                    </svg>
                    <p className={css.boardName}>{title}</p>
                  </div>
                  <div className={css.boardTools}>
                    <button onClick={handleEditBoard}>
                      <svg width="16" height="16" className={css.editBoardIcon}>
                        <use xlinkHref={`${sprite}#pencil`} />
                      </svg>
                    </button>

                    <button onClick={() => dispatch(deleteBoard(_id))}>
                      <svg width="16" height="16" className={css.editBoardIcon}>
                        <use xlinkHref={`${sprite}#trash`} />
                      </svg>
                    </button>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={css.needHelpSection}>
          <div className={css.needHelpImage}></div>
          <p className={css.needHelpText}>
            If you need help with{' '}
            <Link to="/home" className={css.taskPro}>
              TaskPro
            </Link>
            , check out our support resources or reach out to our customer
            support team.
          </p>
          <button className={css.needHelpButton} onClick={handleNeedHelp}>
            <svg width="20" height="20" className={css.helpIcon}>
              <use xlinkHref={`${sprite}#help_circle`} />
            </svg>
            <p>Need help?</p>
          </button>
        </div>
        <button className={css.logOutButton} onClick={handleLogout}>
          <svg width="32" height="32" className={css.logoutIcon}>
            <use xlinkHref={`${sprite}#log-out`} />
          </svg>
          <p>Log out</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
