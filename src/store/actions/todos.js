import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';
import { loadTodos } from '../../helpers/loadTodos';
import Swal from 'sweetalert2';

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
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tarea guardada 😎',
      showConfirmButton: false,
      timer: 1500,
    });
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

export const startDeletingTodo = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await db.doc(`${uid}/tasks/todos/${id}`).delete();

    dispatch(deleteTodo(id));
    Swal.fire({
      position: 'bottom-end',
      width: '200px',
      icon: 'success',
      title: 'Tarea borrada',
      showConfirmButton: false,
      timer: 1500,
    });
  };
};

export const deleteTodo = (id) => ({
  type: types.todosDelete,
  payload: id,
});

export const setTodo = (todos) => ({
  type: types.todosLoad,
  payload: todos,
});

export const refreshTodoList = () => {};
