import React from 'react';
import { useSelector } from 'react-redux';

import { Task } from '../../components/Task/Task';
import { FloatingBtn } from '../../components/floatingBtn/FloatingBtn';
import { AsideNav } from '../../components/asideNavbar/AsideNav';

export const Tasks = () => {
  const { todos } = useSelector((state) => state.tasks);
  return (
    <>
      <AsideNav />
      <div className='tasks container'>
        {todos.length === 0 ? (
          <h1> Aun no tiene tareas </h1>
        ) : (
          <>
            <div className='tasks__header'>
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
          </>
        )}

        <FloatingBtn />
      </div>
    </>
  );
};
