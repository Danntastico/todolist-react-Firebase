import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AddTaskModal } from '../../components/modals/AddTaskModal';
import { TaskListHeader } from '../../components/taskEntries/TaskListHeader';
import { SingleTask } from '../../components/taskEntries/SingleTask';

import moment from 'moment';
import { TaskEntries } from '../../components/taskEntries/TaskEntries';
import { startUpdatingStatus } from '../../store/actions/todos';
import { closeModal, openModal } from '../../store/actions/ui';
import { LoadingView } from '../../components/loadingView/LoadingView';

export const HomeScreen = () => {
  const { todos } = useSelector((state) => state.tasks);
  const { name, photoURL } = useSelector((state) => state.auth);
  const { modalIsOpen } = useSelector((state) => state.ui);

  const sortedTodos = todos.sort((i) => i.status);
  const [loading, setLoading] = useState(true);
  const [realTime, setRealTime] = useState(moment(), 'YYYY-MM-DD hh:mm:ss');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!todos) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [todos]);

  const handleChangeStatus = (id, status) => {
    const targetTodo = todos.filter((i) => i.id === id);
    dispatch(startUpdatingStatus(id, targetTodo[0], status));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <>
      {loading ? (
        <LoadingView />
      ) : (
        <>
          {todos.length === 0 ? (
            <h1> Aun no tiene tareas </h1>
          ) : (
            <div>
              <TaskListHeader />
              <TaskEntries>
                {sortedTodos.map((todo) => (
                  <SingleTask
                    key={todo.id}
                    author={name}
                    photoURL={photoURL}
                    handleChangeStatus={handleChangeStatus}
                    {...todo}
                  />
                ))}
              </TaskEntries>
              <AddTaskModal
                modalIsOpen={modalIsOpen}
                closeModal={handleCloseModal}
                currentTime={realTime.format('yyyy-MM-DDThh:mm')}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};
