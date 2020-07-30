import React from 'react';

export const EditableInput = ({ name, label, inputType, value, onChange }) => {
  return (
    <div className={`editInpt--main`}>
      <div className='editInp'>
        <label htmlFor={name} className='editInpt__label'>
          {label}
        </label>
        <input
          className='editInpt__input'
          type={inputType}
          name={name}
          id={name}
          autoComplete='off'
          value={value}
          onChange={onChange}
          disabled={false}
        />
      </div>
      <i className='fas fa-edit editInpt__btn'></i>
    </div>
  );
};
