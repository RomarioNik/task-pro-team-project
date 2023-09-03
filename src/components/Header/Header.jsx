import css from './Header.module.css';
import icon from '../../img/svg/sprite-icon.svg';
import { Button } from 'components/Button/Button';
import { Select } from 'components/Select/Select';
import Profile from '../Profile';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import EditProfile from '../EditProfile';

const Header = ({ handlerMenu }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handlerModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const option = ['Light', 'Dark', 'Violet'];
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Button className={css.menu_btn} handlerClick={handlerMenu}>
          <svg className={css.header_iconMenu}>
            <use href={`${icon}#icon-menu`}></use>
          </svg>
        </Button>
        <div className={css.profile_container}>
          <Select placeholder={'Theme'} option={option} />
          <Profile handlerClick={handlerModalIsOpen} />
        </div>
      </div>
      {modalIsOpen && (
        <Modal openModal={handlerModalIsOpen}>
          <EditProfile onClose={handlerModalIsOpen} />
        </Modal>
      )}
    </header>
  );
};

export default Header;
