import moment from 'moment';

const filterReducerDefaultState = () => ({
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().startOf('month')
});

export const filterReducer = (state = filterReducerDefaultState(), action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.date };
    case 'SET_END_DATE':
      return { ...state, endDate: action.date };
    default:
      return state;
  }
};
