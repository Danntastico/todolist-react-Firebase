import React from 'react';
import { Task } from '../../components/Task/Task';
import { FloatingBtn } from '../../components/floatingBtn/FloatingBtn';

export const Tasks = () => {
  return (
    <div className='tasks container'>
      <div className='tasks__header'>
        <div className='description'>
          <h1>Tareas</h1>
          <p>(3 asignadas)</p>
        </div>
      </div>
      <div className='tasks__aside'>
        <div className='description'>
          <h1>Tareas</h1>
          <p>(3 asignadas)</p>
        </div>
      </div>
      <div className='tasks__list'>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
      <FloatingBtn />
    </div>
  );
};
