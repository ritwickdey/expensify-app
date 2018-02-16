import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';

import { store } from './store/configureStore';
import {
  addExpense,
  removeExpense,
  startSetExpenses
} from './actions/expenses';
import { getFilteredExpense } from './selectors/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
import { AppRouter, history } from './routes/AppRouter';
import { firebase } from './firebase/firebase';

import 'react-dates/lib/css/_datepicker.css';
import './styles/style.scss';
const appStore = store();

appStore.subscribe(() => {
  const state = appStore.getState();
  console.log(state.filters);
  console.log(getFilteredExpense(state.expenses, state.filters));
  console.log('\n');
});

const expense1 = appStore.dispatch(
  addExpense({ amount: 7000, description: 'Rent Bill', createdAt: 100 })
);

const expense2 = appStore.dispatch(
  addExpense({ amount: 2500, description: 'Gas Bill', createdAt: 75 })
);

const expense3 = appStore.dispatch(
  addExpense({ amount: 45900, description: 'Coffee Bill', createdAt: -50 })
);

// appStore.dispatch(removeExpense({ id: expense1.expense.id }));
// appStore.dispatch(setTextFilter('Bill'));
// appStore.dispatch(sortByAmount());

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
    appStore.dispatch(startSetExpenses()).then(() => renderApp());
    if (history.location.pathname === '/') history.push('/dashboard');
    console.log('logged in');
  } else {
    renderApp();
    history.push('/');
    console.log('logged out');
  }
});
