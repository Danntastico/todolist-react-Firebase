import React, { useState } from 'react';
import Modal from 'react-modal';

import { useForm } from '../../hooks/useForm';

export const AddTaskModal = ({ modalIsOpen, closeModal }) => {
  const [formValues, handleInputChange] = useForm({
    taskTitle: '',
    description: '',
    dueDate: new Date().getDate(),
    status: 'Activa',
  });
  const { taskTitle, description, dueDate, status } = formValues;

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
      <form className='addForm'>
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
          placeholder='Descripcion de la tarea'
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
        <input
          className='addForm__input'
          list='statusList'
          name='status'
          id='status'
          autoComplete='off'
          value={status}
          onChange={handleInputChange}
          disabled={true}
        />
        <datalist id='statusList'>
          <option value='Activa' />
          <option value='Finalizada' />
        </datalist>
        <div className='modal__content--btns'>
          <button type='submit' className='modal__btn submit'>
            Agregar Tarea
          </button>
          <button type='button' className='modal__btn close'>
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
};
