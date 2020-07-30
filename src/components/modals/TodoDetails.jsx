import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { EditableInput } from '../forms/EditableInput';
import { EditableTextarea } from '../forms/EditableTextarea';
import { types } from '../../types/types';
import { openCloseModal } from '../../store/actions/ui';
import { startUpdatingTodo } from '../../store/actions/todos';
import { gravatar } from '../../utils/gravatar';

export const TodoDetails = () => {
  const dispatch = useDispatch();
  const { currentTodo } = useSelector((state) => state.tasks);
  const { name, photoURL, email } = useSelector((state) => state.auth);
  const [inputValues, handleInputChange, reset] = useForm(currentTodo);
  const { dueDate, status, description, title, id } = inputValues;
  const imgsrc = photoURL ? photoURL : gravatar(email);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleUpdateTodo = () => {
    dispatch(
      startUpdatingTodo(id, title, description, status, dueDate, currentTodo)
    );
    handleCloseClick();
    reset();
  };

  const handleCloseClick = () => {
    dispatch(openCloseModal(types.detailsModalIsOpen, false));
    reset();
  };
  return (
    <>
      <form className={`detail`} onSubmit={handleSubmit}>
        <div className='detail__header'>
          <div className='headerTitle'>
            <p>Detalles de la tarea</p>
          </div>
          <div className='headerAuthor'>
            <img src={imgsrc} alt='profile' className='headerImg' />
            <p className='headerProfileName'>{name}</p>
          </div>
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
          <hr />
          <EditableTextarea
            type='text'
            name='description'
            id='description'
            value={description}
            label='Descripción'
            onChange={handleInputChange}
          />
          <hr />
          <EditableInput
            list='statusList'
            name='status'
            label='Estado de la tarea (Activa o Finalizada)'
            value={status}
            onChange={handleInputChange}
            pattern='[Aa]ctiva|[Ff]inalizada'
          >
            <datalist id='statusList'>
              <option value='Activa' />
              <option value='Finalizada' />
            </datalist>
          </EditableInput>
          <hr />
          <div className='detail___row'>
            <label htmlFor='dueDate' className='editable__label-disabled'>
              Vencimiento
            </label>
            <input
              className='addForm__input'
              type='datetime-local'
              id='dueDate'
              name='dueDate'
              value={dueDate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='detail__footer'>
          <button
            onClick={handleUpdateTodo}
            className='detail__submitBtn pointer'
          >
            Submit
          </button>
          <button
            onClick={handleCloseClick}
            className='detail__closeBtn pointer'
          >
            Close
          </button>
        </div>
      </form>
    </>
  );
};
