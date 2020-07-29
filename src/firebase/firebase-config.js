import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwIUWE6d4JB1OQ1m3nD_-UO9O4IY9DVMU',
  authDomain: 'todolist-serempre.firebaseapp.com',
  databaseURL: 'https://todolist-serempre.firebaseio.com',
  projectId: 'todolist-serempre',
  storageBucket: 'todolist-serempre.appspot.com',
  messagingSenderId: '714140148554',
  appId: '1:714140148554:web:dd57421e8752316a6397b3',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
