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

import React, {
  useState  
} from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerUser } from 'redux/auth/operations';
import { registerFormSchema } from 'scheme/index';
import css from './RegisterForm.module.css';
import sprite from 'img/svg/sprite-icon.svg';
import AuthButton from 'components/AuthButton/AuthButton';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const onSubmit = (values, { resetForm }) => {
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
        <Form className={css.form}>
          <label className={css.input}>
            <Field
              type="text"
              name="name"
              placeholder="Enter your name"
              className={css.inputField}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={css.inputError}
            />
          </label>
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
              placeholder="Create a password"
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
                <svg width="18" height="18" className={css.fieldIcon}>
                  <use xlinkHref={`${sprite}#eye`} />
                </svg>
              </span>
          </label>

          <AuthButton textBtn="Register Now" />
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
