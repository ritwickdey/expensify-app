import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './routes/AppRouter';
import { store } from './store/configureStore';
import { addExpense, removeExpense } from './actions/expenses';
import { getFilteredExpense } from './selectors/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';

import './styles/style.scss';

const appStore = store();

appStore.subscribe(() => {
  const state = appStore.getState();
  console.log(getFilteredExpense(state.expenses, state.filter));
});

const expense1 = appStore.dispatch(
  addExpense({ amount: 7000, description: 'Rent Bill', createdAt: 100 })
);

const expense2 = appStore.dispatch(
  addExpense({ amount: 2500, description: 'Gas Bill', createdAt: 75 })
);

const expense3 = appStore.dispatch(
  addExpense({ amount: 459, description: 'Coffee Bill', createdAt: -50 })
);

// appStore.dispatch(removeExpense({ id: expense1.expense.id }));
appStore.dispatch(setTextFilter('Bill'));
appStore.dispatch(sortByAmount());

ReactDOM.render(<AppRouter />, document.getElementById('app'));
