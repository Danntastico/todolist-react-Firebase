import React from 'react';

export const DescriptionStatus = ({ icon, amount, label, color }) => {
  return (
    <div className='description__status'>
      <div className={`status__item ${color}`}>
        <p className='item__counter'>
          <i className={icon}></i>
          {amount}
        </p>
        <p className='item__label'>{label}</p>
      </div>
    </div>
  );
};
