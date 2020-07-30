import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TaskListHeader } from '../../components/taskEntries/TaskListHeader';
import { SingleTask } from '../../components/taskEntries/SingleTask';
import { TaskEntries } from '../../components/taskEntries/TaskEntries';
import { startUpdatingStatus } from '../../store/actions/todos';

import { LoadingView } from '../../components/loadingView/LoadingView';
import { TodoDetails } from '../../components/modals/TodoDetails';
import { ModalContainer } from '../../components/modals/ModalContainer';
import { AddTodoModal } from '../../components/modals/AddTodoModal';
import moment from 'moment';

export const HomeScreen = () => {
  const { todos } = useSelector((state) => state.tasks);
  const { detailsModalIsOpen, addTodoModalIsOpen } = useSelector(
    (state) => state.ui
  );
  const { name, photoURL } = useSelector((state) => state.auth);

  const sortedTodos = todos.sort((i) => i.status);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(
    moment(),
    'YYYY-MM-DD hh:mm:ss'
  );

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
            </div>
          )}
          {detailsModalIsOpen && (
            <ModalContainer modalIsOpen={detailsModalIsOpen}>
              <TodoDetails />
            </ModalContainer>
          )}
          <ModalContainer modalIsOpen={addTodoModalIsOpen}>
            <AddTodoModal currentTime={currentTime} />
          </ModalContainer>
        </>
      )}
    </>
  );
};
