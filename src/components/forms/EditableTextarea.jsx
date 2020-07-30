import React, { useState } from 'react';

export const EditableTextarea = ({
  name,
  label,
  inputType,
  value,
  onChange,
}) => {
  const [disabled, setDisabled] = useState(true);

  const handleEnableEdit = () => {
    setDisabled(!disabled);
  };
  const disabledStyles = disabled ? '-disabled' : '';

  return (
    <div className={`editInpt--main`}>
      <div className='editInp'>
        <label htmlFor={name} className={`editInpt__label${disabledStyles}`}>
          {label}
        </label>
        <textarea
          className={`editInpt__input${disabledStyles}`}
          type={inputType}
          name={name}
          id={name}
          autoComplete='off'
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
      <button onClick={handleEnableEdit} className='editInpt__btn btn pointer'>
        <i className='fas fa-edit'></i>
      </button>
    </div>
  );
};
