import { db } from '../firebase/firebase-config';

export const loadTodos = async (uid) => {
  const todosSnapshot = await db.collection(`${uid}/tasks/todos`).get();
  const notes = [];
  todosSnapshot.forEach((el) => {
    notes.push({
      id: el.id,
      ...el.data(),
    });
  });

  return notes;
};
