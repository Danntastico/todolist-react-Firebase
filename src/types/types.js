export const types = {
  //Authentication
  login: '[Auth] Login',
  logout: '[Auth] Logout',
  //Ui
  uiSetError: '[UI] Set Error',
  uiRemoveError: '[UI] Remove Error',
  uiStartLoading: '[UI] Start loading',
  uiFinishLoading: '[UI] Finish loading',

  uiCloseModal: '[UI] Close Modal',
  uiOpenModal: '[UI] Open Modal',
  uiOpenCloseModal: '[UI] OpenClose modal',

  addTodoModalIsOpen: 'addTodoModalIsOpen',
  detailsModalIsOpen: 'detailsModalIsOpen',

  todosAddNew: '[todos] New todo', //
  todosSetStatus: '[todos] Set status', //Active or Finished
  todosLoad: '[todos] Load todos',
  todosUpdated: '[todos] Update todo',
  todosDelete: '[todos] Delete todo',
  todosGetSingle: '[todos] Get Single todo',
  todosSetCurrent: '[todos] Set current todo',
  todosLogoutCleaner: '[todos] Logout Cleaner',
  todosCounter: '[todos] count total',
};
