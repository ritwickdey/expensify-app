import { createStore, combineReducers } from 'redux';
import { expensesReducer } from '../reducers/expenses';
import { filterReducer } from '../reducers/filters';

export const store = () =>
  createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
