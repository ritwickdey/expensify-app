import React from 'react';
import { shallow } from 'enzyme';
import { DateRangePicker } from 'react-dates';

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

test('should change text change', () => {
  const text = '_foo-text_';
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: {
        value: text
      }
    });
  expect(setTextFilter).toHaveBeenLastCalledWith(text);
});

test('should sort by date', () => {
  wrapper
    .find('select')
    .at(0)
    .simulate('change', {
      target: {
        value: 'date'
      }
    });

  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  wrapper
    .find('select')
    .at(0)
    .simulate('change', {
      target: {
        value: 'amount'
      }
    });

  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const startDate = 10;
  const endDate = 1000;

  wrapper
    .find(DateRangePicker)
    .at(0)
    .prop('onDatesChange')({ startDate, endDate });

  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const startDate = 'startDate';
  const endDate = 'endDate';
  const onFocusChangeHander = wrapper
    .find(DateRangePicker)
    .at(0)
    .prop('onFocusChange');

  onFocusChangeHander(startDate);
  expect(wrapper.state('calenderfocused')).toBe(startDate);

  onFocusChangeHander(endDate);
  expect(wrapper.state('calenderfocused')).toBe(endDate);
});
