import React, { useState } from 'react';

import { useUserData } from 'hooks/useUserData';

import css from './EditProfile.module.css';

import sprite from '../../img/svg/sprite-icon.svg';
import { useDispatch } from 'react-redux';
import { updateProfile } from 'redux/auth/operations';

const EditProfile = () => {

  const user = useUserData();
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState(user.avatarURL);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');

  const handleChangeAvatar = event => {
    setAvatar(event.target.files[0]);
    // const formData = new FormData();

    // formData.append('avatar', avatar);
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  // console.log(avatar);

  if (user.avatarURL === '') {
    console.log(`Аватара у пользователя нет, пришло ''`);
  }

  console.log(`avatarURL:   ${user.avatarURL}`);

  const handleFormSubmit = e => {
    e.preventDefault();

    const updatedProfile = {
      name,
      email,
      password,
      avatar,
    };

    // console.log(updatedProfile);
    dispatch(updateProfile(updatedProfile));
    //закрити модалку
  };

  return (
    <div className={css.modal}>
      <h2 className={css.titleName}>Edit profile</h2>

      <form className={css.formStyle} onSubmit={handleFormSubmit}>
        <label className={css.labelStyle}>
          <input
            className={css.inputNameImg}
            type="file"
            onChange={handleChangeAvatar}
          />
          <svg width="68" height="68" className={css.img}>
            <use xlinkHref={`${sprite}#icon-user-ico`} />
          </svg>
        </label>
        <label className={css.labelStyle}>
          <input
            className={css.inputName}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={css.labelStyle}>
          <input
            className={css.inputName}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={css.labelStyle}>
          <input
            className={css.inputName}
            type="text"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={css.btnAdd}>
          Send
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
