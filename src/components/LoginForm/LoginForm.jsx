// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';

// const LoginForm = () => {
//   return (
//     <>
//       <NavLink to="/auth/register">Registration  </NavLink>
//       <NavLink to="/auth/login">Login</NavLink>
//       <div>LoginForm</div>
//       <Link to="/home">Login Now</Link>
//     </>
//   );
// };

// export default LoginForm;



import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginUser } from '../../redux/auth/operations';
import { loginFormSchema } from 'scheme/index';
import css from '../RegisterForm/RegisterForm.module.css';
import { useLoggedIn } from '../../hooks/useLoggedIn.js';
import { useUserLoading } from 'hooks/useUserLoading';
import AuthBtn from 'components/AthBtn/AuthBtn';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useLoggedIn();
  // console.log(isLoggedIn);
    const isLoading = useUserLoading();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const initialValues = {
    email: '',
    password: '',
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(loginUser(values));
    // console.log('onSubmit executed');
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginFormSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <div className={css.form__container}>
          <Form className={css.register__form}>
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
                placeholder="Confirm a password"
                className={css.form__field}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={css.form__error}
              />
            </label>

            {/* <svg onClick={togglePasswordVisibility}>
                <use href={sprite + '#eye'}></use>
              </svg> */}

            <AuthBtn textBtn="Login In Now" />
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;