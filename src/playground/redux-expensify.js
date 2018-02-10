import { createStore, combineReducers } from 'redux';

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

const expensesReducerDefaultState = () => [];
const expensesReducer = (state = expensesReducerDefaultState(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(expensesReducer);

store.subscribe(() => console.log(store.getState()));
console.log(store.getState());
