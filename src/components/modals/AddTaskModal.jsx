import React from 'react';
import Modal from 'react-modal';
import { useForm } from '../../hooks/useForm';
import { useSelector, useDispatch } from 'react-redux';
import { setError, removeError } from '../../store/actions/ui';
import { ErrorMsg } from '../errorMsg/ErrorMsg';
import { startNewTodo } from '../../store/actions/todos';

export const AddTaskModal = ({ modalIsOpen, closeModal, currentTime }) => {
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
  Modal.setAppElement('#root');
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel='Add a todo'
      shouldCloseOnOverlayClick={false}
      className='modal'
    >
      <h1 className='modal__title'>Add a new Task</h1>
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
        <datalist id='statusList'>
          <option value='Activa' />
          <option value='Finalizada' />
        </datalist>
      </form>
      <div className='modal__content--btns'>
        <button
          type='submit'
          className='modal__btn btn submit'
          onClick={handleSubmit}
        >
          Agregar Tarea
        </button>
        <button
          type='button'
          className='modal__btn btn close'
          onClick={closeModal}
        >
          Cancelar
        </button>
      </div>
    </Modal>
  );
};
