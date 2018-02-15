import React from 'react';
import { shallow } from 'enzyme';

import ExpenseForm from '../../components/ExpenseForm';
import { AddExpensePage } from '../../components/AddExpensePage';

import { expenses } from '../fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('should render add expense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
  wrapper.find(ExpenseForm).prop('onSubmit')(expenses[0]);

  expect(history.push).toHaveBeenCalled();
  expect(startAddExpense).toHaveBeenCalled();
});
