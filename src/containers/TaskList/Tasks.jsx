import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Task } from '../../components/Task/Task';
import { FloatingBtn } from '../../components/floatingBtn/FloatingBtn';
import { AsideNav } from '../../components/asideNavbar/AsideNav';
import { AddTaskModal } from '../../components/modals/AddTaskModal';

export const Tasks = () => {
  const { todos } = useSelector((state) => state.tasks);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const addTaskModal = () => {
    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <AsideNav />
      <div className='tasks container'>
        {todos.length !== 0 ? (
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
        <AddTaskModal modalIsOpen={modalIsOpen} closeModal={handleCloseModal} />
        <FloatingBtn handleClick={addTaskModal} />
      </div>
    </>
  );
};
