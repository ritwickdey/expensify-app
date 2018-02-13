import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { SingleDatePicker } from 'react-dates';
import ExpenseForm from '../../components/ExpenseForm';

import { expenses } from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
  const expense = expenses[0];
  const wrapper = shallow(<ExpenseForm expense={expense} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBeTruthy();
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'foo-value';
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'foo-note';
  wrapper.find('textarea').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = '125.25';
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('amount')).toBe(value);
});

test('should NOT set amount if invalid input', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'foo-abcsjd';
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('amount')).toBeFalsy();
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const expense = { ...expenses[0] };
  delete expense.id;
  const wrapper = shallow(
    <ExpenseForm expense={expense} onSubmit={onSubmitSpy} />
  );

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });

  expect(wrapper.state('error')).toBeFalsy();
  expect(onSubmitSpy).toHaveBeenCalledWith(expense);
});

test('should set new date on date change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const now = moment();
  wrapper.find(SingleDatePicker).prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toBe(now);
});

test('should set calender focus on change', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper.state('calenderfocused')).toBe(false);

  wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused: true });
  expect(wrapper.state('calenderfocused')).toBe(true);
});
