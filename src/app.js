import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';

import { store } from './store/configureStore';
import { getFilteredExpense } from './selectors/expenses';
import { login, logout } from './actions/auth';
import { AppRouter, history } from './routes/AppRouter';
import { firebase } from './firebase/firebase';

import {
  addExpense,
  removeExpense,
  startSetExpenses
} from './actions/expenses';

import 'react-dates/lib/css/_datepicker.css';
import './styles/style.scss';

const appStore = store();

const jsx = (
  <Provider store={appStore}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<div>Loading...</div>, document.getElementById('app'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    appStore.dispatch(login(user.uid));
    appStore.dispatch(startSetExpenses()).then(() => {
      console.log('Data Fetched');
      renderApp();
    });
    if (history.location.pathname === '/') history.push('/dashboard');
    console.log('logged in', user);
  } else {
    renderApp();
    appStore.dispatch(logout());
    history.push('/');
    console.log('logged out');
  }
});
