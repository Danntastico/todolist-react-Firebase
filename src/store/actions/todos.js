import { db } from '../../firebase/firebase-config';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      description: '',
      status: true,
      dueDate: new Date(),
    };
    const docRef = await db.collection(`${uid}/tasks/todos`).add(newNote);
  };
};
