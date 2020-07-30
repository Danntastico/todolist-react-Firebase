import React from 'react';

export const EmptyList = () => {
  return (
    <div className='emptyList'>
      <i className='fas fa-star-half-alt'></i>
      <h1 className='emptyList__label'>Aún no tiene tareas</h1>
    </div>
  );
};
