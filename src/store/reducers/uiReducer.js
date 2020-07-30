import { types } from '../../types/types';

const initialState = {
  loading: false,
  msgError: null,
  detailsModalIsOpen: false,
  addTodoModalIsOpen: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload,
      };
    case types.uiRemoveError:
      return {
        ...state,
        msgError: null,
      };
    case types.uiStartLoading:
      return {
        ...state,
        loading: true,
      };
    case types.uiFinishLoading:
      return {
        ...state,
        loading: false,
      };
    case types.uiOpenCloseModal:
      return {
        ...state,
        [action.payload.target]: action.payload.isOpen,
      };
    default:
      return state;
  }
};
