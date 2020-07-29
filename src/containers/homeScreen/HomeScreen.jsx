import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { FloatingBtn } from '../../components/floatingBtn/FloatingBtn';
import { AsideNav } from '../../components/asideNavbar/AsideNav';
import { AddTaskModal } from '../../components/modals/AddTaskModal';
import { TaskListHeader } from '../../components/taskEntries/TaskListHeader';
import { SingleTask } from '../../components/taskEntries/SingleTask';

import moment from 'moment';
import { TaskEntries } from '../../components/taskEntries/TaskEntries';

export const HomeScreen = () => {
  const { todos } = useSelector((state) => state.tasks);
  const { name } = useSelector((state) => state.auth);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [realTime, setRealTime] = useState(moment(), 'YYYY-MM-DD hh:mm:ss');

  const addTaskModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const thick = () => {
    setInterval(() => {
      setRealTime(moment(moment(), 'YYYY-MM-DD hh:mm:ss'));
    }, 1000);
  };

  useEffect(() => {
    thick();
    return () => {
      clearInterval(thick);
    };
  }, [realTime.getSeconds]);

  return (
    <>
      <AsideNav handleClick={addTaskModal} />
      <div className='tasks container'>
        {todos.length === 0 ? (
          <h1> Aun no tiene tareas </h1>
        ) : (
          <>
            <TaskListHeader />
            <TaskEntries>
              {todos.map((todo) => (
                <SingleTask key={todo.id} author={name} {...todo} />
              ))}
            </TaskEntries>
          </>
        )}
        <AddTaskModal
          modalIsOpen={modalIsOpen}
          closeModal={handleCloseModal}
          currentTime={realTime.format('yyyy-MM-DDThh:mm')}
        />
        <FloatingBtn handleClick={addTaskModal} />
      </div>
    </>
  );
};
