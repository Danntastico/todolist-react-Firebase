import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startGettingSingleTodo } from '../../store/actions/todos';
import { useParams } from 'react-router-dom';

export const TodoDetail = ({}) => {
  const params = useParams();
  const dispatch = useDispatch();
  const { currentTodo } = useSelector((state) => state.tasks);
  const { title, description, status, dueDate } = currentTodo;
  const [inputValues, handleInputChange] = useForm({
    inputTitle: title,
    inputDescription: description,
    inputStatus: status,
    inputDueDate: dueDate,
  });

  const { taskId: id } = params;
  const {
    inputTitle,
    inputDescription,
    inputStatus,
    inputDueDate,
  } = inputValues;

  useEffect(() => {
    dispatch(startGettingSingleTodo(id));
  }, []);

  const photoURL = '';
  const imgsrc = photoURL ? photoURL : 'assets/profilepic.png';

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className='detail' onSubmit={handleSubmit}>
        <div className='detail__info'>
          <input
            className='detail__title'
            type='text'
            name='title'
            id='title'
            autoComplete='off'
            value={inputTitle}
            onChange={handleInputChange}
            disabled={true}
          />
          <textarea
            className='addForm__textarea'
            type='text'
            name='description'
            id='description'
            autoComplete='off'
            value={inputDescription}
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
