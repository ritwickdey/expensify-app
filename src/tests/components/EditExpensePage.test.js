import React from 'react';
import { shallow } from 'enzyme';

import ExpenseForm from '../../components/ExpenseForm';
import { EditExpensePage } from '../../components/EditExpensePage';

import { expenses } from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper, match;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  match = { params: { id: 'foo-id' } };
  wrapper = shallow(
    <EditExpensePage
      match={match}
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
  wrapper.find(ExpenseForm).prop('onSubmit')('foo-id', expenses[0]);

  expect(history.push).toHaveBeenCalled();
  expect(editExpense).toHaveBeenCalled();
});

test('should handle on delete button', () => {
  wrapper
    .find('button')
    .at(0)
    .simulate('click');

  expect(history.push).toHaveBeenCalled();
  expect(removeExpense).toHaveBeenCalled();
});
