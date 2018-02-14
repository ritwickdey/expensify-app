import { getExpensesTotal } from '../../selectors/expenses-total';
import { expenses } from '../fixtures/expenses';

test('should return 0 if no expences', () => {
  expect(getExpensesTotal()).toBe(0);
});

test('should currently add up a single expenses', () => {
  const expense = expenses[0];
  expect(getExpensesTotal([expense])).toBe(expense.amount);
});

test('should currently add up a multiple expenses', () => {
  expect(getExpensesTotal(expenses)).toBe(2600);
});
