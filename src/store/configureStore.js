import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { expensesReducer } from '../reducers/expenses';
import { filterReducer } from '../reducers/filters';
import { authReducer } from '../reducers/auth';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = () =>
  createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer,
      auth: authReducer
    }),
    composeEnhances(applyMiddleware(ReduxThunk))
  );
