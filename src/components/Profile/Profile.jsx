import css from './Profile.module.css';
import { Button } from 'components/Button/Button';
import icon from '../../img/svg/sprite-icon.svg';
import { useUserData } from 'hooks/useUserData';

const Profile = ({ handlerClick }) => {
  const { name, avatarURL } = useUserData();

  return (
    <div>
      <Button className={css.profile_btn} handlerClick={handlerClick}>
        {name}
        {avatarURL ? (
          <img src={avatarURL} alt="avatar" className={css.profile_avatar} />
        ) : (
          <svg className={css.profile_icon}>
            <use href={`${icon}#icon-user-ico`}></use>
          </svg>
        )}
      </Button>
    </div>
  );
};

export default Profile;
