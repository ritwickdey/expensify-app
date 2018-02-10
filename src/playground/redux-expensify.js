import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

/**
 * Operations :-
 *    ADD_EXPENSE
 *    REMOVE_EXPENSE
 *    EDIT_EXPENSE
 *    SET_TEXT_FILTER
 *    SORT_BY_DATE
 *    SORT_BY_AMOUNT
 *    SET_START_DATE
 *    SET_END_DATE
 * 
 * const demoState = {
        expenses: [{
          id: '...',
          description: '...',
          note: '.............',
          ammount: 0,
          createdAt: 0
        }],
        filter: {
          text: 'rent',
          sortBy: 'ammount', // date or ammount
          startDate: undefined,
          endDate: undefined
        }
    };
 */

const addExpense = ({
  description = '',
  note = '',
  ammount = 0,
  createdAt = Date.now()
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    ammount,
    createdAt
  }
});

const expensesReducerDefaultState = () => [];
const expensesReducer = (state = expensesReducerDefaultState(), action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return state.concat(action.expense);
    default:
      return state;
  }
};

const filterReducerDefaultState = () => ({
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
});
const filterReducer = (state = filterReducerDefaultState(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
);

store.dispatch(
  addExpense({
    ammount: 100,
    note: 'big note......',
    description: 'small desccription'
  })
);
store.subscribe(() => console.log(store.getState()));
console.log(store.getState());
