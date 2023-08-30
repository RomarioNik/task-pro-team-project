import css from './Profile.module.css';
import { Button } from 'components/Button/Button';
import icon from '../../img/svg/sprite-icon.svg';
import { useUserData } from 'hooks/useUserData';

const Profile = ({ handlerClick }) => {
  const { name } = useUserData();
  return (
    <div>
      <Button className={css.profile_btn} handlerClick={handlerClick}>
        {name}

        <svg height={29} width={32}>
          <use href={`${icon}#icon-user-ico`}></use>
        </svg>
      </Button>
    </div>
  );
};

export default Profile;
