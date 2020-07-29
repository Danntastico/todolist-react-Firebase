import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoDetail = ({
  description,
  dueDate,
  id,
  status,
  title,
  author,
  realTime,
  photoURL,
}) => {
  const [inputValues, handleInputChange] = useForm({
    title: title,
    description: description,
    status: status,
    dueDate: dueDate,
  });
  const imgsrc = photoURL ? photoURL : 'assets/profilepic.png';

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className='detail' onSubmit={handleSubmit}>
        <div className='detail__info'>
          <input
            className='addForm__input detail__title'
            type='text'
            name='title'
            id='title'
            placeholder='Titulo de la tarea'
            autoComplete='off'
            value={title}
            onChange={handleInputChange}
            disabled={true}
          />
          <input
            className='addForm__input detail__description'
            type='text'
            name='description'
            id='description'
            placeholder='Titulo de la tarea'
            autoComplete='off'
            value={description}
            onChange={handleInputChange}
            disabled={true}
          />
        </div>
        <div className='detail__dueDate'>
          <i className='fas fa-calendar-alt'></i>
          <textarea
            className='addForm__textarea'
            type='text'
            name='description'
            id='description'
            placeholder='Descripción de la tarea'
            autoComplete='off'
            value={description}
            onChange={handleInputChange}
          />
        </div>
        <div className='detail__author'>
          <img src={imgsrc} alt='profile' className='detail__img' />
          <p className='detail__author'>{author}</p>
        </div>
      </form>
    </>
  );
};
