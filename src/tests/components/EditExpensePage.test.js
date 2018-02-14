import React from 'react';
import { shallow } from 'enzyme';

import ExpenseForm from '../../components/ExpenseForm';
import { EditExpensePage } from '../../components/EditExpensePage';

import { expenses } from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper, match;
const expense = expenses[0];
beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expense}
      removeExpense={removeExpense}
      editExpense={editExpense}
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
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('should handle on delete button', () => {
  wrapper
    .find('button')
    .at(0)
    .simulate('click');

  expect(history.push).toHaveBeenCalled();
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expense.id });
});
