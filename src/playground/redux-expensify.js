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
          amount: 0,
          createdAt: 0
        }],
        filter: {
          text: 'rent',
          sortBy: 'amount', // date or amount
          startDate: undefined,
          endDate: undefined
        }
    };
 */

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = Date.now()
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
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

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

const setStartDate = date => ({
  type: 'SET_START_DATE',
  date
});

const setEndDate = date => ({
  type: 'SET_END_DATE',
  date
});

const getFilteredExpense = (
  expenses,
  { endDate, startDate, sortBy = 'date', text = '' }
) => {
  // console.log(endDate, startDate, sortBy, text)
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;

      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate;

      const textMatch = expense.description
        .trim()
        .toLowerCase()
        .includes(text.trim().toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'amount') return a.amount < b.amount ? 1 : -1;
      
      return a.createdAt < b.createdAt ? 1 : -1;
    });
};

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
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.date };
    case 'SET_END_DATE':
      return { ...state, endDate: action.date };
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
store.subscribe(() => {
  const state = store.getState();
  const filteredState = getFilteredExpense(state.expenses, state.filter);
  console.log(filteredState);
});

// add Expense dispatch
const expense1 = store.dispatch(
  addExpense({ amount: 100, description: 'rent', createdAt: 100 })
);

// add Expense dispatch
const expense2 = store.dispatch(
  addExpense({ amount: 500, description: 'Coffee', createdAt: -50 })
);

// // remove Expense dispatch
// store.dispatch(removeExpense({ id: expense1.expense.id }));

// // Edit expense dispatch
// store.dispatch(
//   editExpense(expense2.expense.id, {
//     amount: 200,
//     description: 'special coffee'
//   })
// );

// // set Text Filter expense dispath
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// // Sort by Ammount & Date dispath
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// // Set Start & End Date
// store.dispatch(setStartDate(-1000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(25));
// store.dispatch(setEndDate());
