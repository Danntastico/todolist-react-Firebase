import React, { useEffect, useState, useRef } from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { EditableInput } from '../../components/forms/EditableInput';

export const TodoDetail = () => {
  const myModal = useRef(false);
  const dispatch = useDispatch();
  const { currentTodo } = useSelector((state) => state.tasks);
  const { modalIsOpen } = useSelector((state) => state.ui);
  const [inputValues, handleInputChange] = useForm(currentTodo);

  const photoURL = '';
  const imgsrc = photoURL ? photoURL : 'assets/profilepic.png';
  useEffect(() => {
    if (modalIsOpen) {
      myModal.current.style.display = 'block';
    } else {
      myModal.current.style.display = 'none';
    }
  }, [modalIsOpen]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCloseClick = () => {};
  return (
    <div ref={myModal} className='detail'>
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
    </div>
  );
};
