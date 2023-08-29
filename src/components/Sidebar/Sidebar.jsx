import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import css from './Sidebar.module.css';
import sprite from '../../img/svg/sprite-icon.svg';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/operations';

const Sidebar = ({ isOpen }) => {
  //дошки будуть приходити з бекенду, назви рендеряться в сайдбарі
  const boards = [
    {
      name: 'Project office',
      id: '1',
    },
    {
      name: 'Neon Light Project Test',
      id: '2',
    },
    {
      name: 'Board3',
      id: '3',
    },
    {
      name: 'Board4',
      id: '4',
    },
    {
      name: 'Board5',
      id: '5',
    },
  ];

  const dispatch = useDispatch();

  const handleNeedHelp = () => {
    console.log('Modal window Need Help');
  };

  const handleCreateBoard = () => {
    console.log('Modal window New Board');
  };

  const handleEditBoard = () => {
    console.log('Modal window Edit Board');
  };

  const handleDeleteBoard = (boardId, name) => {
    const indexToDelete = boards.findIndex(obj => obj.id === boardId);
    if (indexToDelete !== -1) {
      boards.splice(indexToDelete, 1);
    }

    console.log(boards);
    console.log(window.location.pathname);
  };

  return (
    <div className={isOpen ? css.active : css.sidebar}>
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
          {boards.map(({ name, id }) => (
            <li key={id}>
              <NavLink
                to={`${name}`}
                className={({ isActive }) =>
                  isActive ? css.active : css.boardsItem
                }
              >
                <div className={css.boardTitle}>
                  <svg width="18" height="18" className={css.boardIcon}>
                    <use xlinkHref={`${sprite}#puzzle-piece`} />
                  </svg>
                  <p className={css.boardName}>{name}</p>
                </div>
                <div className={css.boardTools}>
                  <button onClick={handleEditBoard}>
                    <svg width="16" height="16" className={css.editBoardIcon}>
                      <use xlinkHref={`${sprite}#pencil`} />
                    </svg>
                  </button>
                  <button onClick={() => handleDeleteBoard(id, name)}>
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
      <button
        className={css.logOutButton}
        onClick={() => dispatch(logOutUser())}
      >
        <svg width="32" height="32" className={css.logoutIcon}>
          <use xlinkHref={`${sprite}#log-out`} />
        </svg>
        <p>Log out</p>
      </button>
    </div>
  );
};

export default Sidebar;
