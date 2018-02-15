import { expensesReducer } from '../../reducers/expenses';

import { expenses } from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, {
    type: '@@INIT'
  });
  expect(state).toEqual([]);
});

test('should set add expense', () => {
  const newExpense = {
    id: 'foo',
    description: 'foo Bill',
    note: '',
    amount: 100,
    createdAt: 0
  };
  const action = {
    expense: newExpense,
    type: 'ADD_EXPENSE'
  };
  const oldState = expenses;
  const state = expensesReducer(oldState, action);
  expect(state).toContainEqual(newExpense);
});

test('should remove expense by id', () => {
  const seletedExpense = expenses[1];
  const action = {
    type: 'REMOVE_EXPENSE',
    expense: {
      id: seletedExpense.id
    }
  };
  const oldState = expenses;
  const state = expensesReducer(oldState, action);
  expect(state.length).toBe(oldState.length - 1);
  expect(state).not.toContainEqual(seletedExpense);
});

test('should NOT remove expense by id, if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    expense: {
      id: '_FOO_125_'
    }
  };
  const oldState = expenses;
  const state = expensesReducer(oldState, action);
  expect(state.length).toBe(oldState.length);
  expect(state).toEqual(oldState);
});

test('should EDIT expense by id', () => {
  const selectedExpence = expenses[1];
  const modifiedExpense = {
    ...selectedExpence,
    description: 'foo Bill',
    note: '',
    amount: 100,
    createdAt: 0
  };
  const action = {
    type: 'EDIT_EXPENSE',
    expense: { ...modifiedExpense }
  };
  const oldState = expenses;
  
  const state = expensesReducer(oldState, action);
  
  expect(state).toContainEqual(modifiedExpense);
  expect(state).not.toContainEqual(expenses[1]);
  expect(state.length).toBe(oldState.length);
});

test('should NOT EDIT expense by id, if id is not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    expense: {
      id: '_FOO_125_'
    }
  };
  const oldState = expenses;
  const state = expensesReducer(oldState, action);
  expect(state.length).toBe(oldState.length);
  expect(state).toEqual(oldState);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSE',
    expenses
  };
  const state = expensesReducer(undefined, action);
  expect(state).toEqual(expenses);
});
