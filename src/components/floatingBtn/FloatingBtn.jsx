import React from 'react';

export const FloatingBtn = ({ handleClick }) => {
  return (
    <button className='floatingBtn btn pointer' onClick={handleClick}>
      <i className='fas fa-plus'></i>
    </button>
  );
};
