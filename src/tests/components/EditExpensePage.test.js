import React from 'react';
import { shallow } from 'enzyme';

import ExpenseForm from '../../components/ExpenseForm';
import { EditExpensePage } from '../../components/EditExpensePage';

import { expenses } from '../fixtures/expenses';

let onSubmit, history, wrapper, match;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  match = { params: { id: 'foo-id' } };
  wrapper = shallow(
    <EditExpensePage match={match} onSubmit={onSubmit} history={history} />
  );
});

test('should render add expense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
  wrapper.find(ExpenseForm).prop('onSubmit')('foo-id', expenses[0]);

  expect(history.push).toHaveBeenCalled();
  expect(onSubmit).toHaveBeenCalled();
});
