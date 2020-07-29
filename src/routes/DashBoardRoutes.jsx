import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomeScreen } from '../containers/homeScreen/HomeScreen';
import { AsideNav } from '../components/asideNavbar/AsideNav';
import { TodoDetail } from '../containers/todoDetail/TodoDetail';
import { useDispatch } from 'react-redux';
import { openModal } from '../store/actions/ui';
import { FloatingBtn } from '../components/floatingBtn/FloatingBtn';

export const DashboardRoutes = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };
  return (
    <>
      <AsideNav handleClick={handleOpenModal} />
      <div className='container mt-2'>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/task/:taskId' component={TodoDetail} />

          <Redirect to='/' />
        </Switch>
      </div>
      <FloatingBtn handleClick={handleOpenModal} />
    </>
  );
};
