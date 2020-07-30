import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config';
import { login } from '../store/actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from './AuthRouter';
import { startLoadingTodos } from '../store/actions/todos';
import { DashboardRoutes } from './DashBoardRoutes';
import { LoadingView } from '../components/loadingView/LoadingView';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.photoURL, user.email));
        setIsLoggedIn(true);
        dispatch(startLoadingTodos(user.uid));
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <LoadingView />;
  }
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path='/auth'
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            isAuthenticated={isLoggedIn}
            path='/'
            component={DashboardRoutes}
          />
          <Redirect to='/auth/login' />
        </Switch>
      </div>
    </Router>
  );
};
