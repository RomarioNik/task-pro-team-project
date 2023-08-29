import React, { useState } from 'react';

import { useUserData } from 'hooks/useUserData';

import css from './EditProfile.module.css';


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

  return (
      <div className={css.modal}>
        <h2 className={css.titleName}>Edit profile</h2>
        
        <form className={css.formStyle}>
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
