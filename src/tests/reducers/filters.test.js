import moment from 'moment';
import { filterReducer } from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filterReducer(undefined, {
    type: '@@INIT'
  });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sort by to amount', () => {
  const state = filterReducer(undefined, {
    type: 'SORT_BY_AMOUNT'
  });

  expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const state = filterReducer(currentState, {
    type: 'SORT_BY_DATE'
  });
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const text = 'my-foo-text';
  const state = filterReducer(currentState, {
    type: 'SET_TEXT_FILTER',
    text
  });
  expect(state.text).toBe(text);
});

test('should set start date', () => {
  const date = moment(100);
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const text = 'my-foo-text';
  const state = filterReducer(currentState, {
    type: 'SET_START_DATE',
    date
  });
  expect(state.startDate).toEqual(date);
});

test('should set end date', () => {
  const date = moment(-100);
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const text = 'my-foo-text';
  const state = filterReducer(currentState, {
    type: 'SET_END_DATE',
    date
  });
  expect(state.endDate).toEqual(date);
});
