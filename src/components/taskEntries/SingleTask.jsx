import React from 'react';

export const SingleTask = ({
  description,
  dueDate,
  id,
  status,
  title,
  author,
}) => {
  return (
    <div className='taskContainer'>
      <div className='task__header'>
        <p className='taskStatus'>{status}</p>
        <button className='timeAdd btn'>Agregar tiempo</button>
      </div>
      <div className='userInfo'>
        <img src='assets/profilepic.jpg' alt='' className='userInfo__picture' />
        <p className='userInfo__name'>{author}</p>
        <div className='userInfo__timeLeft'>
          <i className='far fa-clock'></i>
          <p>
            Tiempo restante <span>12</span> hrs
          </p>
        </div>
      </div>
      <div className='taskContent'>
        <h3 className='taskContent__title'>{title}</h3>
        <p className='taskContent__description'>{description}</p>

        <div className='taskContent__menu'>
          <i className='fas fa-ellipsis-v menuIcon'></i>
          <div className='menuOptions'>
            <div className='menuOptions_Item'>
              <i className='fas fa-eye'></i>
              <p>Ver tarea</p>
            </div>
            <div className='menuOptions_Item'>
              <i className='fas fa-trash'></i>
              <p>Borrar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
