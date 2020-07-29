import { types } from '../../types/types';
import { firebase, googleAuthProvider } from '../../firebase/firebase-config';
import { startLoading, finishLoading } from './ui';

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.photoURL));
      });
  };
};

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, ''));
        dispatch(finishLoading());
      })
      .catch((e) => {
        dispatch(finishLoading());
        console.log(e);
      });
  };
};

export const login = (uid, displayName, photoURL) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      photoURL,
    },
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});
