import { types } from '../../types/types';

/**
 * todos: []
 *
 */
const initialState = {
  todos: [],
  currentTodo: null,
  activeTodos: 0,
  totalTodos: 0,
  finishedTodos: 0,
};

export const todosReducer = (state = initialState, action) => {
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

    case types.todosDelete:
      return {
        ...state,
        todos: state.todos.filter((i) => i.id !== action.payload),
      };

    case types.todosSetStatus: {
      return {
        ...state,
        todos: state.todos.map((i) =>
          i.id === action.payload.id
            ? {
                ...i,
                d: 'donde putas tienes el resto',
                status: action.payload.status,
              }
            : i
        ),
      };
    }
    case types.todosGetSingle:
      return {
        ...state,
        currentTodo: action.payload,
      };
    case types.todosSetCurrent:
      return {
        ...state,
        currentTodo: state.todos.filter(
          (item) => item.id === action.payload
        )[0],
      };
    case types.todosCounter:
      return {
        ...state,
        activeTodos: state.todos.filter((item) => item.status === 'activa')
          .length,
        finishedTodos: state.todos.filter(
          (item) => item.status === 'Finalizada'
        ).length,
        totalTodos: state.todos.length,
      };
    default:
      return state;
  }
};
