import React from 'react';
import { Task } from '../../components/Task/Task';

export const Tasks = () => {
  return (
    <div className='tasks'>
      <div className='tasks__header'>
        <h1>
          Tareas <span className='header__remainTasks'>(3 asignadas)</span>
        </h1>
        <Task />
      </div>
    </div>
  );
};
