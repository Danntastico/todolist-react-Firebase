import React from 'react';

export const ErrorMsg = ({ message }) => {
  return (
    <div className='error'>
      <p className='error__text'>{message}</p>
    </div>
  );
};
