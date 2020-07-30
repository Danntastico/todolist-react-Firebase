import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';
import { loadTodos, getTodo } from '../../helpers/loadTodos';
import Swal from 'sweetalert2';

export const startNewTodo = (title, description, dueDate) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newTodo = {
      title,
      description,
      status: 'Activa',
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

export const startUpdatingStatus = (id, todo, status) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await db.doc(`${uid}/tasks/todos/${id}`).update({ ...todo, status });
    dispatch(updateTodoStatus(id, status));
  };
};

export const startGettingSingleTodo = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const todo = await getTodo(uid, id);
    dispatch(getSingleTodo(todo));
  };
};

export const startUpdatingTodo = (
  id,
  title,
  description,
  status,
  dueDate,
  currentTodo
) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    console.log(title);
    const newTodo = {
      title,
      description,
      status,
      dueDate,
    };
    await db
      .doc(`${uid}/tasks/todos/${id}`)
      .update({ ...currentTodo, newTodo });
    dispatch(updateTodo(id, title, description, status, dueDate));
    Swal.fire({
      position: 'bottom-end',
      width: '300px',
      icon: 'success',
      title: 'Tarea Actualizada',
      showConfirmButton: false,
      timer: 2500,
    });
  };
};

export const updateTodo = (id, title, description, status, dueDate) => ({
  type: types.todosUpdated,
  payload: {
    id,
    title,
    description,
    status,
    dueDate,
    setCurrentTodo,
  },
});

export const updateTodoStatus = (id, status) => ({
  type: types.todosSetStatus,
  payload: {
    id,
    status,
  },
});

export const addNewTodo = (id, todo) => ({
  type: types.todosAddNew,
  payload: {
    id,
    ...todo,
  },
});

export const getSingleTodo = (todo) => ({
  type: types.todosGetSingle,
  payload: todo,
});

export const setCurrentTodo = (id) => ({
  type: types.todosSetCurrent,
  payload: id,
});

export const deleteTodo = (id) => ({
  type: types.todosDelete,
  payload: id,
});

export const setTodo = (todos) => ({
  type: types.todosLoad,
  payload: todos,
});

export const countTodos = () => ({
  type: types.todosCounter,
});
