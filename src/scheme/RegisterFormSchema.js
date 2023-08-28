import * as yup from 'yup';

export const registerFormSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required('Name is required')
      .min(2, 'Username must be at least 2 characters')
      .max(32, 'Username can be at most 32 characters')
      .matches(
        // /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~-]+$/,
        /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~-]+$/,
        'Invalid name format'
      )
      .trim(),

    email: yup
      .string()
      .required('Email is required')
      .matches(
        /^([A-Za-z0-9_-]+.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$/,
        'Invalid email format'
      )
      .trim(),
    password: yup
      .string()
      .min(8, 'Password should be at least 8 characters')
      .max(64, 'Password is too long')
      .matches(
        /^[A-Za-z0-9!@#$%^&*()_+=\-[\]{}|\\:;"'<>,.?/~`]+$/,
        'Invalid password format'
      )
      .required('Password is required'),
  })
  .required();
