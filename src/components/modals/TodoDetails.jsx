import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { EditableInput } from '../forms/EditableInput';

export const TodoDetails = () => {
  const { currentTodo } = useSelector((state) => state.tasks);
  const { name, photoURL } = useSelector((state) => state.auth);
  const [inputValues, handleInputChange] = useForm(currentTodo);
  const { id, dueDate, status, description, title } = inputValues;
  const imgsrc = photoURL ? photoURL : 'assets/profilepic.png';

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCloseClick = () => {};
  return (
    <>
      <form className={`detail`} onSubmit={handleSubmit}>
        <div className='detail__header'>
          <div className='headerTitle'>
            <p>{title}</p>
          </div>
          <div className='headerAuthor'>
            <img src={imgsrc} alt='profile' className='headerImg' />
            <p className='headerProfileName'>{name}</p>
          </div>
          <button onClick={handleCloseClick} className='detail__closeBtn'>
            &times;
          </button>
        </div>
        <div className='detail__body'>
          <EditableInput
            type='text'
            name='title'
            id='title'
            value={title}
            label='Titulo'
            onChange={handleInputChange}
          />
          <textarea
            className='addForm__textarea'
            type='text'
            name='description'
            id='description'
            autoComplete='off'
            value={description}
            onChange={handleInputChange}
          />
        </div>
        <div className='detail__dueDate'>
          <i className='fas fa-calendar-alt'></i>
        </div>
      </form>
    </>
  );
};
