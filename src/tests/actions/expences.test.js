import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
  const expense = {
    amount: 25.2,
    description: 'foo',
    createdAt: 100,
    note: 'foo note'
  };
  const action = addExpense(expense);
  expect(action).toEqual({
    expense: {
      ...expense,
      id: expect.any(String)
    },
    type: 'ADD_EXPENSE'
  });
});

test('should setup add expense action object with default value', () => {
  const action = addExpense();
  expect(action).toEqual({
    expense: {
      amount: 0,
      description: '',
      createdAt: expect.any(Number),
      note: '',
      id: expect.any(String)
    },
    type: 'ADD_EXPENSE'
  });
});
