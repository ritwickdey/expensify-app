import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseSummary } from '../../components/ExpenseSummary';
import { expenses } from '../fixtures/expenses';

test('should render ExpenseList with one expense', () => {
  const wrapper = shallow(
    <ExpenseSummary
      expensesFilterTotal={500}
      expensesFilterCount={1}
      expensesCount={1}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with muliple expense', () => {
  const wrapper = shallow(
    <ExpenseSummary
      expensesFilterTotal={5500}
      expensesFilterCount={4}
      expensesCount={5}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
