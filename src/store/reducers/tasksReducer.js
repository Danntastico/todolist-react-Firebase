import { types } from '../../types/types';

/**
 * todos: []
 *
 */
const initialState = {
  todos: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.todosLoad:
      return {
        ...state,
        todos: [...action.payload],
      };
    case types.todosAddNew:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    default:
      return state;
  }
};
