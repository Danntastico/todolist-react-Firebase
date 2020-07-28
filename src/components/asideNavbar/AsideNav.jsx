import React from 'react';

export const AsideNav = () => {
  return (
    <div className='tasks__aside'>
      <div className='aside__row'>
        <div className='description'>
          <h1>Tareas</h1>
          <p>(3 asignadas)</p>
        </div>
        <button className='addTask btn'>
          <i className='fas fa-plus'></i>
          Agregar tarea
        </button>
      </div>
      <div className='aside__row'>
        <div className='row__content'>
          <h2>To do list</h2>
          <p>Viernes, 17 de febrero</p>
        </div>
        <img src='assets/profilepic.jpg' alt='' />
      </div>
    </div>
  );
};
