import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { TaskListHeader } from '../../components/taskEntries/TaskListHeader';
import { SingleTask } from '../../components/taskEntries/SingleTask';
import { TaskEntries } from '../../components/taskEntries/TaskEntries';

import { LoadingView } from '../../components/loadingView/LoadingView';
import { TodoDetails } from '../../components/modals/TodoDetails';
import { ModalContainer } from '../../components/modals/ModalContainer';
import { AddTodoModal } from '../../components/modals/AddTodoModal';
import { startUpdatingStatus, countTodos } from '../../store/actions/todos';
import { EmptyList } from '../../components/loadingView/EmptyList';

export const HomeScreen = () => {
  const { todos, activeTodos, totalTodos, finishedTodos } = useSelector(
    (state) => state.tasks
  );

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
    dispatch(countTodos());
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
          {totalTodos === 0 ? (
            <EmptyList />
          ) : (
            <div>
              <TaskListHeader
                finished={finishedTodos}
                total={totalTodos}
                active={activeTodos}
              />
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
