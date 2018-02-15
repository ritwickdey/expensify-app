import React from 'react';
import { shallow } from 'enzyme';

import ExpenseForm from '../../components/ExpenseForm';
import { EditExpensePage } from '../../components/EditExpensePage';

import { expenses } from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper, match;
const expense = expenses[0];
beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expense}
      startRemoveExpense={startRemoveExpense}
      startEditExpense={startEditExpense}
      history={history}
    />
  );
});

test('should render add expense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
  wrapper.find(ExpenseForm).prop('onSubmit')(expense);

  expect(history.push).toHaveBeenCalled();
  expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('should handle on delete button', () => {
  wrapper
    .find('button')
    .at(0)
    .simulate('click');

  expect(history.push).toHaveBeenCalled();
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expense.id });
});
