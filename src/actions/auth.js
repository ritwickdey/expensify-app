import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => () =>
  firebase.auth().signInWithPopup(googleAuthProvider);

export const startLogout = () => () => firebase.auth().signOut();
