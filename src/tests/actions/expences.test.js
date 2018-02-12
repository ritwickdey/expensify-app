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
