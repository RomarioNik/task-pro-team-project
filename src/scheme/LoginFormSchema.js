import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~-]+$/, // eslint-disable-next-line
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
});