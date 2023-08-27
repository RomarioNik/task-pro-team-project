import { Link } from 'react-router-dom';
import css from './Profile.module.css';
import { Button } from 'components/Button/Button';
import icon from '../../img/svg/sprite-icon.svg';
const Profile = () => {
  return (
    <div className={css.profile_container}>
      <Button className={css.profile_btn}>
        Vlad
        <svg height={32} width={32}>
          <use href={`${icon}#icon-user`}></use>
        </svg>
      </Button>
    </div>
  );
};

export default Profile;
