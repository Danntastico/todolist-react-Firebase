import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';
import { loadTodos } from '../../helpers/loadTodos';

export const startNewTodo = (title, description, dueDate) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newTodo = {
      title,
      description,
      status: 'active',
      dueDate,
    };
    const docRef = await db.collection(`${uid}/tasks/todos`).add(newTodo);
    dispatch(addNewTodo(docRef.id, newTodo));
  };
};

export const startLoadingTodos = (uid) => {
  return async (dispatch) => {
    const todos = await loadTodos(uid);
    dispatch(setTodo(todos));
  };
};

export const addNewTodo = (id, todo) => ({
  type: types.todosAddNew,
  payload: {
    id,
    ...todo,
  },
});

export const setTodo = (todos) => ({
  type: types.todosLoad,
  payload: todos,
});

export const refreshTodoList = () => {};
