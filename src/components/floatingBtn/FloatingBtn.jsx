import React from 'react';
import { useDispatch } from 'react-redux';

export const FloatingBtn = ({ handleClick }) => {
  return (
    <button className='floatingBtn btn pointer' onClick={handleClick}>
      <i className='fas fa-plus'></i>
    </button>
  );
};
