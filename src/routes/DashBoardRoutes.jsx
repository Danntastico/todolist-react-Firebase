import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomeScreen } from '../containers/homeScreen/HomeScreen';
import { AsideNav } from '../components/asideNavbar/AsideNav';
import { useDispatch } from 'react-redux';
import { openCloseModal } from '../store/actions/ui';
import { FloatingBtn } from '../components/floatingBtn/FloatingBtn';
import { types } from '../types/types';

export const DashboardRoutes = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openCloseModal(types.addTodoModalIsOpen, true));
  };
  return (
    <>
      <AsideNav handleClick={handleOpenModal} />
      <div className='container mt-2'>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Redirect to='/' />
        </Switch>
      </div>
      <FloatingBtn handleClick={handleOpenModal} />
    </>
  );
};
