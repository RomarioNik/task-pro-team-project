import React from 'react';
import PropTypes from 'prop-types';
import css from './AuthButton.module.css';

const AuthButton = ({ textBtn}) => {
  return (
    <button type="submit" className={css.AuthButton} >
      {textBtn}
    </button>
  );
};

AuthButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func, 
};

export default AuthButton;