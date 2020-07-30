import { types } from '../../types/types';
import { firebase, googleAuthProvider } from '../../firebase/firebase-config';
import { startLoading, finishLoading } from './ui';
import Swal from 'sweetalert2';

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.photoURL, user.email));
      });
  };
};
export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });

        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        Swal.fire('Error', e.message, 'error');
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
        Swal.fire('Error', e.message, 'error');
        console.log(e);
      });
  };
};

export const login = (uid, displayName, photoURL, email) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      photoURL,
      email,
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
