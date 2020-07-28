import React from 'react';
import { Provider } from 'react-redux';
import { Tasks } from './containers/TaskList/Tasks';
import { store } from './store/store';
import './styles/styles.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <Tasks />
    </Provider>
  );
};
