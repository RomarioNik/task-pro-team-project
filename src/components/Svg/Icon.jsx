import React from 'react';
import Icons from '../../img/svg/sprite-icon.svg';

export const Icon = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={Icons + '#' + id}></use>
    </svg>
  );
};
