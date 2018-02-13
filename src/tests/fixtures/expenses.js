import moment from 'moment';

export const expenses = [
  {
    id: '1',
    description: 'Some Coffee Bill',
    note: '',
    amount: 100,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Some Tea Bill',
    note: '',
    amount: 2000,
    createdAt: moment(0)
      .subtract(10, 'days')
      .valueOf()
  },
  {
    id: '3',
    description: 'Light Bill',
    note: '',
    amount: 500,
    createdAt: moment(0)
      .add(10, 'days')
      .valueOf()
  }
];
