import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { EditableInput } from '../forms/EditableInput';
import { EditableTextarea } from '../forms/EditableTextarea';
import { types } from '../../types/types';
import { openCloseModal } from '../../store/actions/ui';

export const TodoDetails = () => {
  const dispatch = useDispatch();
  const { currentTodo } = useSelector((state) => state.tasks);
  const { name, photoURL } = useSelector((state) => state.auth);
  const [inputValues, handleInputChange] = useForm(currentTodo);
  const { dueDate, status, description, title } = inputValues;
  const imgsrc = photoURL ? photoURL : 'assets/profilepic.png';
  console.table(inputValues);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCloseClick = () => {
    dispatch(openCloseModal(types.detailsModalIsOpen, false));
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
            type='datetime-local'
            name='dueDate'
            id='dueDate'
            value={dueDate}
            label='Fecha de vencimiento'
            onChange={handleInputChange}
          />
          <hr />
          <EditableInput
            list='statusList'
            name='status'
            label='Estado de la tarea'
            onChange={handleInputChange}
          >
            <datalist id='statusList'>
              <option value='Activa' />
              <option value='Finalizada' />
            </datalist>
          </EditableInput>
          <hr />
        </div>
        <div className='detail__footer'>
          <button
            onClick={handleCloseClick}
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
