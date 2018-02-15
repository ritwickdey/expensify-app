import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses
} from '../../actions/expenses';
import { expenses } from '../fixtures/expenses';

import { database } from '../../firebase/firebase';

const createMockStore = configureStore([ReduxThunk]);

beforeEach(done => {
  const data = expenses.reduce((prev, current) => {
    prev[current.id] = { ...current };
    delete prev[current.id].id;
    return prev;
  }, {});

  database
    .ref(`/expenses`)
    .set(data)
    .then(() => done());
});

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

test('should add expense to database and store', done => {
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

test('should add expense with default value to database and store', done => {
  const store = createMockStore({});
  const expense = {};
  const defaultExpenseTestValue = {
    amount: 0,
    description: '',
    createdAt: expect.any(Number),
    note: ''
  };

  store
    .dispatch(startAddExpense(expense))
    .then(() => {
      const actions = store.getActions();
      expect(actions).toContainEqual({
        type: 'ADD_EXPENSE',
        expense: { ...defaultExpenseTestValue, id: expect.any(String) }
      });
      return database.ref(`/expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual({ ...defaultExpenseTestValue });
      done();
    });
});

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSE',
    expenses
  });
});

test('should fetch the expences from firebase', done => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSE',
      expenses
    })
    done();
  });
});
