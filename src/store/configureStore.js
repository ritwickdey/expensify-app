import { createStore, combineReducers } from 'redux';
import { expensesReducer } from '../reducers/expenses';
import { filterReducer } from '../reducers/filters';

export const store = () =>
  createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer
    })
  );
