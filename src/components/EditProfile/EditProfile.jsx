import React, { useState } from 'react';

import { useUserData } from 'hooks/useUserData';

import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { registerFormSchema } from '../../scheme/index';

import css from './EditProfile.module.css';

import sprite from '../../img/svg/sprite-icon.svg';
import { useDispatch } from 'react-redux';
import { updateProfile } from 'redux/auth/operations';

const EditProfile = ({ onClose }) => {
  const user = useUserData();
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState(user.avatarURL);
  const [avatarUploaded, setAvatarUploaded] = useState('false');
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChangeAvatar = event => {
    setAvatar(event.target.files[0]);

    setAvatarUploaded(event.target.files[0]);
    const formData = new FormData();

    formData.append('avatarUploaded', avatarUploaded);
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

  if (user.avatarURL !== '') {
    console.log(
      `Аватар пришёл, avatarURL:${user.avatarURL}, должна быть фотка`
    );
    console.log(
      `Или фотка загружена только что пользователем, avatarURL:${avatarUploaded}`
    );
  }

  console.log(avatarUploaded.type);

  if (avatarUploaded.type) {
    console.log(`Работает`);
  }

  const modalClose = event => {
    onClose();
  };

  const initialValues = {
    avatar: '', 
    name: user.name,
    email: user.email,
    password: '',
  };

  const onSubmit = ({avatar, name, email, password}) => {
    
    

    let updatedProfile;

    console.log(`Вот такой аватар ${avatar}`);
    

    if (user.avatarURL !== '' || user.avatarURL === '') {
      if ( avatar ) {
 

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

  const handleFormSubmit = e => {
    e.preventDefault();

    let updatedProfile;

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

  return (
    <div className={css.modal}>
      <h2 className={css.titleName}>Edit profile</h2>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(props) => (
        <Form className={css.formStyle} >
          <label className={css.labelStyle}>
            <Field
                className={css.inputNameImg}
                id="file"
                type="file"
                accept="image/*"
                name="avatar"
               onChange={(event) => {
 props.setFieldValue('avatar', event.currentTarget.files[0]);
 }}
            />
  
            {user.avatarURL === '' ? (
              <svg width="68" height="68" className={css.img}>
                <use xlinkHref={`${sprite}#icon-user-ico`} />
              </svg>
            ) : (
              <img src={user.avatarURL} className={css.imgUser} alt="avatar" />
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
            />
          </label>
          <label className={css.labelStyle}>
            <Field
              className={css.inputName}
              type="email"
              name="email"
              value={props.values.email}
              onChange={handleChange}
              />
              <ErrorMessage
              name="email"
              component="div"
            />
          </label>
          <label className={css.labelStyle}>
            <Field
              className={css.inputName}
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              value={props.values.password}
              placeholder="Password"
              onChange={handleChange}
              />
              <ErrorMessage
              name="password"
              component="div"
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

export default EditProfile;

// import React, { useState } from 'react';

// import { useUserData } from 'hooks/useUserData';

// import css from './EditProfile.module.css';

// import sprite from '../../img/svg/sprite-icon.svg';
// import { useDispatch } from 'react-redux';
// import { updateProfile } from 'redux/auth/operations';

// const EditProfile = ({ onClose }) => {
//   const user = useUserData();
//   const dispatch = useDispatch();

//   const [avatar, setAvatar] = useState(user.avatarURL);
//   const [avatarUploaded, setAvatarUploaded] = useState(false);
//   const [name, setName] = useState(user.name);
//   const [email, setEmail] = useState(user.email);
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleChangeAvatar = event => {
//     setAvatar(event.target.files[0]);

//     setAvatarUploaded(event.target.files[0]);
//     const formData = new FormData();

//     formData.append('avatarUploaded', avatarUploaded);
//   };

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'name':
//         return setName(value);
//       case 'email':
//         return setEmail(value);
//       case 'password':
//         return setPassword(value);
//       default:
//         return;
//     }
//   };

//   // console.log(avatar);

//   if (user.avatarURL === '') {
//     console.log(`Аватара у пользователя нет, пришло ''`);
//   }

//   if (user.avatarURL !== '') {
//     console.log(
//       `Аватар пришёл, avatarURL:${user.avatarURL}, должна быть фотка`
//     );
//     console.log(
//       `Или фотка загружена только что пользователем, avatarURL:${avatarUploaded}`
//     );
//   }

//   console.log(avatarUploaded.type);

//   if (avatarUploaded.type) {
//     console.log(`Работает`);
//   }

//   const modalClose = event => {
//     onClose();
//   };

//   const handleFormSubmit = e => {
//     e.preventDefault();

//     let updatedProfile;

//     if (user.avatarURL !== '' || user.avatarURL === '') {
//       if (avatarUploaded.type) {
//         if (password === '') {
//           updatedProfile = {
//             name,
//             email,
//             avatar,
//           };
//         } else {
//           updatedProfile = {
//             name,
//             email,
//             password,
//             avatar,
//           };
//         }
//       } else {
//         if (password === '') {
//           updatedProfile = {
//             name,
//             email,
//           };
//         } else {
//           updatedProfile = {
//             name,
//             email,
//             password,
//           };
//         }
//       }
//     }

//     // console.log(updatedProfile);
//     dispatch(updateProfile(updatedProfile));
//     //закрити модалку
//     modalClose();
//   };

//   return (
//     <div className={css.modal}>
//       <h2 className={css.titleName}>Edit profile</h2>

//       <form className={css.formStyle} onSubmit={handleFormSubmit}>
//         <label className={css.labelStyle}>
//           <input
//             className={css.inputNameImg}
//             type="file"
//             onChange={handleChangeAvatar}
//           />

//           {user.avatarURL === '' ? (
//             <svg width="68" height="68" className={css.img}>
//               <use xlinkHref={`${sprite}#icon-user-ico`} />
//             </svg>
//           ) : (
//             <img src={user.avatarURL} className={css.imgUser} alt="avatar" />
//           )}
//         </label>
//         <label className={css.labelStyle}>
//           <input
//             className={css.inputName}
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleChange}
//           />
//         </label>
//         <label className={css.labelStyle}>
//           <input
//             className={css.inputName}
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//           />
//         </label>
//         <label className={css.labelStyle}>
//           <input
//             className={css.inputName}
//             type={passwordVisible ? 'text' : 'password'}
//             name="password"
//             value={password}
//             placeholder="Password"
//             onChange={handleChange}
//           />
//           <span
//             className={css.passwordToggle}
//             onClick={togglePasswordVisibility}
//           >
//             <svg width="18" height="18" className={css.fieldIcon}>
//               <use xlinkHref={`${sprite}#eye`} />
//             </svg>
//           </span>
//         </label>
//         <button type="submit" className={css.btnAdd}>
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProfile;

