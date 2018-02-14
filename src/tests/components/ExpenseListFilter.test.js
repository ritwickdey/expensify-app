import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { expenses } from '../fixtures/expenses';
import { filter, filter2 } from '../fixtures/filters';

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate;
let wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();

  wrapper = shallow(
    <ExpenseListFilter
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      filters={filter}
    />
  );
});

test('should render ExpenseListFilter correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilter with filter2', () => {
  wrapper.setProps({
    filters: filter2
  });
  expect(wrapper).toMatchSnapshot();
});
