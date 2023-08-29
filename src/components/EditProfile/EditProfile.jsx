import React, { useState } from 'react';

import { useUserData } from 'hooks/useUserData';

import css from './EditProfile.module.css';

import sprite from '../../img/svg/sprite-icon.svg';


const EditProfile = () => {
  
  const user = useUserData();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleChangeName = (event) => {
    setName()
  };

  const handleChangeEmail = (event) => {
    setEmail()
  };

  if (user.avatarURL === '') {
    console.log(`Аватара у пользователя нет, пришло ''`)
  }

  console.log(`avatarURL:   ${user.avatarURL}`)

  return (
      <div className={css.modal}>
        <h2 className={css.titleName}>Edit profile</h2>
        
      <form className={css.formStyle}>
        <label className={css.labelStyle}>
          <input className={css.inputNameImg} type="file"  />
           <svg width="68" height="68" >
              <use xlinkHref={`${sprite}#icon-user-ico`} />
            </svg>
          </label>
          <label className={css.labelStyle}>
            <input className={css.inputName} type="text" value={name} onChange={handleChangeName} />
          </label>
          <label className={css.labelStyle}>
            <input className={css.inputName} type="email" value={email} onChange={handleChangeEmail} />
          </label>
          <label className={css.labelStyle}>
            <input
              className={css.inputName}
              type="text"
              placeholder="Password"
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
