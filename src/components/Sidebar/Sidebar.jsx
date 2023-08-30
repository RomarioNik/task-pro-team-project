
import { Link, NavLink, useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

import css from './Sidebar.module.css';
import sprite from '../../img/svg/sprite-icon.svg';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/operations';

import {
  deleteBoard,
  getAllBoards,
  // addBoard,
} from '../../redux/boards/boardsOperations';
import { useBoardsList } from 'hooks/useBoardsList';
import Modal from '../Modal/index.js';
import NeedHelp from '../Needhelp/NeedHelp';
import NewBoard from '../NewEditBoard/NewBoard';

const Sidebar = ({ isOpen }) => {


  const navigate = useNavigate();


  const [openNeedHelpModal, setOpenNeedHelpModal] = useState(false);
  const [openNewBoardModal, setOpenNewBoardModal] = useState(false);
  const [openEditBoardModal, setOpenEditBoardModal] = useState(false);


  const dispatch = useDispatch();

  const boards = useBoardsList();

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  const handleCreateBoard = () => {
    setOpenNewBoardModal(true);

    // const newBoard = {
    //   title: 'Test new board 2',
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

  return (
    <div className={isOpen ? css.active : css.sidebar}>
      {openNeedHelpModal && (
        <Modal children={<NeedHelp />} openModal={setOpenNeedHelpModal} />
      )}
      {openNewBoardModal && (
        <Modal children={<NewBoard />} openModal={setOpenNewBoardModal} />
      )}
      {openEditBoardModal && (
        <Modal children={<NewBoard />} openModal={setOpenEditBoardModal} />
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
          <button className={css.createBoardButton} onClick={handleCreateBoard}>
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
          , check out our support resources or reach out to our customer support
          team.
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
  );
};

export default Sidebar;
