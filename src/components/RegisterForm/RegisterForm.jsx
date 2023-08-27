// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';

// const RegisterForm = () => {
//   return (
//     <>
//       <NavLink to="/auth/register">Registration  </NavLink>
//       <NavLink to="/auth/login">Login</NavLink>
//       <div>RegisterForm</div>
//       <Link to="/home">Register Now</Link>
//     </>
//   );
// };

// export default RegisterForm;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerUser } from 'redux/auth/operations';
import { registerFormSchema } from 'scheme/index';
import css from './RegisterForm.module.css';
import { useLoggedIn } from '../../hooks/useLoggedIn.js';
// import sprite from '';
import AuthBtn from 'components/AthBtn/AuthBtn';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useLoggedIn();
  const [passwordVisible, setPasswordVisible] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setPasswordVisible(!passwordVisible);
  // };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  const onSubmit = (values, { resetForm }) => {
    // console.log(values);
    dispatch(registerUser(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerFormSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <div className={css.form__container}>
          <Form className={css.register__form}>
            <label className={css.form__input}>
              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
                className={css.form__field}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={css.form__error}
              />
            </label>
            <label className={css.form__input}>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className={css.form__field}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.form__error}
              />
            </label>
            <label className={css.form__input}>
              <Field
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Create a password"
                className={css.form__field}
                // onChange={togglePasswordVisibility}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={css.form__error}
              />

           </label>

            {/* <div              
              onClick={togglePasswordVisibility}
            >           
                <svg width="20px" height="20px">
                <use href={sprite + '#eye'}></use>
                </svg>
            </div> */}

            <AuthBtn textBtn="Register Now"  />
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;