import moment from 'moment';

export const filter = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

export const filter2 = {
  text: 'Some',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(20, 'days')
};
