import { getFilteredExpense } from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
  {
    id: '1',
    description: 'Some Coffee Bill',
    note: '',
    amount: 100,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Some Tea Bill',
    note: '',
    amount: 2000,
    createdAt: moment(0).subtract(10, 'days').valueOf()
  },
  {
    id: '3',
    description: 'Light Bill',
    note: '',
    amount: 500,
    createdAt: moment(0).add(10, 'days').valueOf()
  }
];

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
