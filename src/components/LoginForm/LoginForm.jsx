import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginUser } from '../../redux/auth/operations';
import { loginFormSchema } from 'scheme/index';
import css from '../RegisterForm/RegisterForm.module.css';
import sprite from 'img/svg/sprite-icon.svg';
import AuthButton from 'components/AuthButton/AuthButton';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values, { resetForm }) => {
    dispatch(loginUser(values));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginFormSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className={css.form}>
            <NavLink to="/auth/register"className={css.navLink}>
                Registration
              </NavLink>
              <NavLink to="/auth/login" className={`${css.navLink} ${css.active}`}   >Login</NavLink> 
            <label className={css.input}>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className={css.inputField}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.inputError}
              />
            </label>
            <label className={css.input}>
              <Field
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Confirm a password"
                className={css.inputField}
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
                {passwordVisible ? (
                  <svg width="18" height="18" className={css.fieldIcon}>
                    <use xlinkHref={`${sprite}#icon-eye-off`} />
                  </svg>
                ) : (
                  <svg width="18" height="18" className={css.fieldIcon}>
                    <use xlinkHref={`${sprite}#eye`} />
                  </svg>
                )}
              </span>
            </label>

            <AuthButton textBtn="Login In Now" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;