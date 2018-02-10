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

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  expense: { ...updates, id }
});

const removeExpense = ({ id = '' } = {}) => ({
  type: 'REMOVE_EXPENSE',
  expense: { id }
});

const expensesReducerDefaultState = () => [];
const expensesReducer = (state = expensesReducerDefaultState(), action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(e => e.id !== action.expense.id);
    case 'EDIT_EXPENSE':
      return state.map(
        e =>
          e.id === action.expense.id
            ? { ...e, ...action.expense, id: action.expense.id }
            : e
      );
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

// subscription
store.subscribe(() => console.log(store.getState()));

// add Expense dispatch
const expense1 = store.dispatch(
  addExpense({ ammount: 100, description: 'rent' })
);

// add Expense dispatch
const expense2 = store.dispatch(
  addExpense({ ammount: 500, description: 'Coffee' })
);

// remove Expense dispatch
store.dispatch(removeExpense({ id: expense1.expense.id }));

// Edit expense dispath
store.dispatch(
  editExpense(expense2.expense.id, {
    ammount: 200,
    description: 'special coffee'
  })
);
