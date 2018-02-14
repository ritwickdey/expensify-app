import React from 'react';
import { shallow } from 'enzyme';

import ExpenseForm from '../../components/ExpenseForm';
import { AddExpensePage } from '../../components/AddExpensePage';

import { expenses } from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render add expense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
  wrapper.find(ExpenseForm).prop('onSubmit')(expenses[0]);

  expect(history.push).toHaveBeenCalled();
  expect(addExpense).toHaveBeenCalled();
});
