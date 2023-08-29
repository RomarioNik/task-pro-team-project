import React from 'react';
import PropTypes from 'prop-types';
import css from './AuthBtn.module.css';

const AuthBtn = ({ textBtn}) => {
  return (
    <button type="submit" className={css.authBtn} >
      {textBtn}
    </button>
  );
};

AuthBtn.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func, 
};

export default AuthBtn;