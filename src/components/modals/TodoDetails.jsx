import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { EditableInput } from '../forms/EditableInput';

export const TodoDetails = () => {
  const { currentTodo } = useSelector((state) => state.tasks);
  const [inputValues, handleInputChange] = useForm(currentTodo);

  const photoURL = '';
  const imgsrc = photoURL ? photoURL : 'assets/profilepic.png';

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCloseClick = () => {};
  return (
    <>
      <form className={`detail__content`} onSubmit={handleSubmit}>
        <button onClick={handleCloseClick}>close</button>
        <div className='detail__info'>
          <EditableInput
            type='text'
            name='inputTitle'
            id='inputTitle'
            value=''
            onChange={handleInputChange}
          />
          <input
            className='detail__title'
            type='text'
            name='inputTitle'
            id='inputTitle'
            autoComplete='off'
            /* value={title} */
            value=''
            onChange={handleInputChange}
            disabled={false}
          />
          <textarea
            className='addForm__textarea'
            type='text'
            name='description'
            id='description'
            autoComplete='off'
            /* value={description} */
            value=''
            onChange={handleInputChange}
          />
        </div>
        <div className='detail__dueDate'>
          <i className='fas fa-calendar-alt'></i>
        </div>
        <div className='detail__author'>
          <img src={imgsrc} alt='profile' className='detail__img' />
          <p className='detail__author'>{/* author */}</p>
        </div>
      </form>
    </>
  );
};
