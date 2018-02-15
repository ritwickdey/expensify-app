import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense
} from '../../actions/expenses';
import { expenses } from '../fixtures/expenses';

import { database } from '../../firebase/firebase';

const createMockStore = configureStore([ReduxThunk]);

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({
    expense: {
      id: '123'
    },
    type: 'REMOVE_EXPENSE'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123', { description: 'foo' });
  expect(action).toEqual({
    expense: {
      id: '123',
      description: 'foo'
    },
    type: 'EDIT_EXPENSE'
  });
});

test('should setup add expense action object', () => {
  const expense = expenses[2];
  const action = addExpense(expense);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense
  });
});

test('should add expense to database and store', () => {
  const expense = expenses[2];
  const action = addExpense(expense);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense
  });
});

test('should add expense with default value to database and store', done => {
  const store = createMockStore({});
  const expense = { ...expenses[1] };
  delete expense.id;
  store
    .dispatch(startAddExpense(expense))
    .then(() => {
      const actions = store.getActions();
      expect(actions).toContainEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expense
        }
      });
      return database.ref(`/expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expense);
      done();
    });
});

// xtest('should setup add expense action object with default value', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     expense: {
//       amount: 0,
//       description: '',
//       createdAt: expect.any(Number),
//       note: '',
//       id: expect.any(String)
//     },
//     type: 'ADD_EXPENSE'
//   });
// });
