import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startDeletingTodo, setCurrentTodo } from '../../store/actions/todos';
import { openCloseModal } from '../../store/actions/ui';
import { types } from '../../types/types';
import { remainTimeCalculator } from '../../helpers/remainTimeCalculator';
import { gravatar } from '../../utils/gravatar';

export const SingleTask = ({
  description,
  dueDate,
  id,
  status,
  title,
  author,
  realTime,
  photoURL,
  handleChangeStatus,
  currentTime,
}) => {
  const dispatch = useDispatch();
  const handleDeleteTask = () => {
    dispatch(startDeletingTodo(id));
  };
  const { email } = useSelector((state) => state.auth);

  const imgsrc = photoURL ? photoURL : gravatar(email);
  const statusLabel = status === 'Activa' ? 'active' : 'finished';
  //const remainTime = remainTimeCalculator(currentTime, dueDate);
  const [remainTime, setRemainTime] = useState(
    remainTimeCalculator(currentTime, dueDate)
  );
  useEffect(() => {
    setRemainTime(remainTimeCalculator(currentTime, dueDate));
  }, [description, dueDate, status, title, author, currentTime]);
  const handleClick = () => {
    dispatch(setCurrentTodo(id));
    dispatch(openCloseModal(types.detailsModalIsOpen, true));
  };

  return (
    <div className='taskContainer'>
      <div className='task__header'>
        <p className={`taskStatus ${statusLabel}`}>{status}</p>
        {status === 'Activa' && (
          <button
            className='timeAdd btn'
            onClick={() => handleChangeStatus(id, 'Finalizada')}
          >
            Finalizar Tarea
          </button>
        )}
      </div>
      <div className='userInfo'>
        <img src={imgsrc} alt='' className='userInfo__picture' />
        <p className='userInfo__name'>{author}</p>
        {status === 'Activa' && (
          <div className='userInfo__timeLeft'>
            <i className='far fa-clock'></i>
            <p>
              Tiempo restante <span>{remainTime}</span>
            </p>
          </div>
        )}
      </div>
      <div className='taskContent'>
        <h3 className='taskContent__title'>{title}</h3>
        <p className='taskContent__description'>{description}</p>

        <div className='taskContent__menu'>
          <i className='fas fa-ellipsis-v menuIcon pointer' />

          <div className='menuOptions'>
            <div className='menuOptions_Item pointer' onClick={handleClick}>
              <i className='fas fa-eye' />
              <p>Ver tarea</p>
            </div>

            <div
              className='menuOptions_Item pointer'
              onClick={handleDeleteTask}
            >
              <i className='fas fa-trash' />
              <p>Borrar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
