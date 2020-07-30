import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useSelector, useDispatch } from 'react-redux';
import { setError, removeError, openCloseModal } from '../../store/actions/ui';
import { ErrorMsg } from '../errorMsg/ErrorMsg';
import { startNewTodo } from '../../store/actions/todos';
import { types } from '../../types/types';

export const AddTodoModal = ({ currentTime }) => {
  const { msgError } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    taskTitle: '',
    description: '',
    dueDate: currentTime,
    status: 'Activa',
  });
  const { taskTitle, description, dueDate } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidator()) {
      dispatch(startNewTodo(taskTitle, description, dueDate));
      closeModal();
      reset();
    }
  };

  const closeModal = () => {
    dispatch(openCloseModal(types.addTodoModalIsOpen, false));
  };

  const formValidator = () => {
    if (taskTitle.trim().length === 0) {
      dispatch(setError('Agrega un titulo a tu tarea'));
      return false;
    } else if (dueDate < currentTime) {
      dispatch(
        setError('La fecha de vencimiento no debe ser menor a la fecha actual!')
      );
      return false;
    }

    dispatch(removeError());
    return true;
  };
  return (
    <div className='addtodo'>
      <h1 className='addtodo__title'>Add a new Task</h1>
      {msgError && <ErrorMsg message={msgError} />}
      <form className='addForm' onSubmit={handleSubmit}>
        <input
          className='addForm__input'
          type='text'
          name='taskTitle'
          id='taskTitle'
          placeholder='Titulo de la tarea'
          autoComplete='off'
          value={taskTitle}
          onChange={handleInputChange}
        />
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
        <input
          className='addForm__input'
          type='datetime-local'
          id='dueDate'
          name='dueDate'
          value={dueDate}
          onChange={handleInputChange}
        />
      </form>
      <div className='addtodo__content--btns'>
        <button
          type='submit'
          className='addtodo__btn btn submit'
          onClick={handleSubmit}
        >
          Agregar Tarea
        </button>
        <button
          type='button'
          className='addtodo__btn btn close'
          onClick={closeModal}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};
