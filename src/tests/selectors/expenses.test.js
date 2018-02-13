import { getFilteredExpense } from '../../selectors/expenses';
import moment from 'moment';

import { expenses } from '../fixtures/expenses';

test('should filter by text value', () => {
  const filter = {
    text: 'coffee'
  };

  const result = getFilteredExpense(expenses, filter);
  expect(result.length).toBe(1);
  expect(result[0]).toEqual(expenses[0]);
});

test('should filter by start date filter', () => {
  const filter = {
    startDate: moment(0)
  };

  const result = getFilteredExpense(expenses, filter);
  expect(result).not.toContainEqual(expenses[1]);
  expect(result).toContainEqual(expenses[0]);
  expect(result).toContainEqual(expenses[2]);
});

test('should filter by end date filter', () => {
  const filter = {
    endDate: moment(0)
  };

  const result = getFilteredExpense(expenses, filter);
  expect(result).not.toContainEqual(expenses[2]);
  expect(result).toContainEqual(expenses[0]);
  expect(result).toContainEqual(expenses[1]);
});

test('should filter by start & end date filter', () => {
  const filter = {
    startDate: moment(0).subtract(40, 'days'),
    endDate: moment(0)
  };

  const result = getFilteredExpense(expenses, filter);
  expect(result).not.toContainEqual(expenses[2]);
  expect(result).toContainEqual(expenses[0]);
  expect(result).toContainEqual(expenses[1]);
});

test('should sort by amount', () => {
  const filter = {
    sortBy: 'amount'
  };

  const result = getFilteredExpense(expenses, filter);
  expect(result[0]).toEqual(expenses[1]);
  expect(result[1]).toEqual(expenses[2]);
  expect(result[2]).toEqual(expenses[0]);
});

test('should sort by date', () => {
  const filter = {
    sortBy: 'date'
  };

  const result = getFilteredExpense(expenses, filter);
  expect(result[0]).toEqual(expenses[2]);
  expect(result[1]).toEqual(expenses[0]);
  expect(result[2]).toEqual(expenses[1]);
});
