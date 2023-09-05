import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useUserData } from 'hooks/useUserData';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { editProfileSchema } from '../../scheme/index';

import css from './EditProfile.module.css';

import sprite from '../../img/svg/sprite-icon.svg';
import { useDispatch } from 'react-redux';
import { updateProfile } from 'redux/auth/operations';

const EditProfile = ({ onClose }) => {
  const user = useUserData();
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState(user.avatarURL);
  const [localAvatar, setLocalAvatar] = useState(null);
  const [avatarUploaded, setAvatarUploaded] = useState('false');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChangeAvatar = event => {
    setAvatar(event.target.files[0]);

    setAvatarUploaded(event.target.files[0]);
    const formData = new FormData();

    setLocalAvatar(URL.createObjectURL(event.target.files[0]));

    formData.append('avatarUploaded', avatarUploaded);
  };

  // if (user.avatarURL === '') {
  //   console.log(`Аватара у пользователя нет, пришло ''`);
  // }

  // if (user.avatarURL !== '') {
  //   console.log(
  //     `Аватар пришёл, avatarURL:${user.avatarURL}, должна быть фотка`
  //   );
  //   console.log(
  //     `Или фотка загружена только что пользователем, avatarURL:${avatarUploaded}`
  //   );
  // }

  // console.log(avatarUploaded.type);

  // console.log(`Текущая тема:${user.userTheme}`);

  // if (avatarUploaded.type) {
  //   console.log(`Работает`);
  // }

  console.log(localAvatar);
  console.log(user?.avatarURL);

  const modalClose = event => {
    onClose();
  };

  const initialValues = {
    avatar: '',
    name: user.name,
    email: user.email,
    password: '',
  };

  const onSubmit = ({ name, email, password }) => {
    let formData = new FormData();

    formData.set('avatar', avatar);

    let updatedProfile;

    // console.log(`Вот такой аватар ${avatar}`);

    if (user.avatarURL !== '' || user.avatarURL === '') {
      if (avatarUploaded.type) {
        if (password === '') {
          updatedProfile = {
            name,
            email,
            avatar,
          };
        } else {
          updatedProfile = {
            name,
            email,
            password,
            avatar,
          };
        }
      } else {
        if (password === '') {
          updatedProfile = {
            name,
            email,
          };
        } else {
          updatedProfile = {
            name,
            email,
            password,
          };
        }
      }
    }

    // console.log(updatedProfile);
    dispatch(updateProfile(updatedProfile));
    //закрити модалку
    modalClose();
  };

  // if (avatarUploaded.type) {
  //   window.alert(
  //     'Фото завантажено. Якщо ви закінчили редагувати профіль, то для оновлення Аватарки натисніть кнопку Send'
  //   );
  // }

  return (
    <div className={css.modal}>
      <h2 className={css.titleName}>Edit profile</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={editProfileSchema}
        onSubmit={onSubmit}
      >
        {props => (
          <Form className={css.formStyle}>
            <label className={css.labelStyle}>
              <input
                className={css.inputNameImg}
                type="file"
                name="avatar"
                onChange={handleChangeAvatar}
              />

              {!localAvatar && user.avatarURL === '' ? (
                <div className={css.imgBackground}>
                  <svg width="68" height="68" className={css.img}>
                    <use xlinkHref={`${sprite}#icon-user-ico`} />
                  </svg>
                  <div className={css.plusIconBackground}>
                    <svg width="10" height="10" className={css.plusIcon}>
                      <use xlinkHref={`${sprite}#plus`} />
                    </svg>
                  </div>
                </div>
              ) : (
                <div className={css.imgBackground}>
                  <img
                    src={localAvatar ? localAvatar : user.avatarURL}
                    className={css.imgUser}
                    alt="avatar"
                  />
                  <div className={css.plusIconBackground}>
                    <svg width="10" height="10" className={css.plusIcon}>
                      <use xlinkHref={`${sprite}#plus`} />
                    </svg>
                  </div>
                </div>
              )}
            </label>
            <label className={css.labelStyle}>
              <Field
                className={css.inputName}
                type="text"
                name="name"
                value={props.values.name}
                onChange={props.handleChange}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={css.inputError}
              />
            </label>
            <label className={css.labelStyle}>
              <Field
                className={css.inputName}
                type="email"
                name="email"
                value={props.values.email}
                onChange={props.handleChange}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.inputError}
              />
            </label>
            <label className={css.labelStyle}>
              <Field
                className={css.inputName}
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                value={props.values.password}
                placeholder="Password"
                onChange={props.handleChange}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={css.inputError}
              />
              <span
                className={css.passwordToggle}
                onClick={togglePasswordVisibility}
              >
                <svg width="18" height="18" className={css.fieldIcon}>
                  <use xlinkHref={`${sprite}#eye`} />
                </svg>
              </span>
            </label>
            <button type="submit" className={css.btnAdd}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

EditProfile.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EditProfile;
