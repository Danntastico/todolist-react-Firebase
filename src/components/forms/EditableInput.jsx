import React, { useState } from 'react';

export const EditableInput = ({
  name,
  label,
  inputType,
  value,
  onChange,
  list,
  children,
}) => {
  const [disabled, setDisabled] = useState(true);

  const handleEnableEdit = () => {
    setDisabled(!disabled);
  };
  const disabledStyles = disabled ? '-disabled' : '';

  return (
    <div className={`editable--main`}>
      <div className='editable'>
        <label htmlFor={name} className={`editable__label${disabledStyles}`}>
          {label}
        </label>
        <input
          className={`editInpt__input${disabledStyles}`}
          type={inputType}
          name={name}
          id={name}
          autoComplete='off'
          value={value}
          onChange={onChange}
          disabled={disabled}
          list={list}
        />
        {children}
      </div>
      <button onClick={handleEnableEdit} className='editableBtn btn pointer'>
        <i className='fas fa-edit'></i>
      </button>
    </div>
  );
};
