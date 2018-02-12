import {
  setEndDate,
  setTextFilter,
  setStartDate,
  sortByAmount,
  sortByDate
} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
});

test('should generate set end date action', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  });
});
