import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [
    {
      id: '...',
      description: '...',
      note: '.............',
      ammount: 0,
      createdAt: 0
    }
  ],
  filter: {
    text: 'rent',
    sortBy: 'ammount', // date or ammount
    startDate: undefined,
    endDate: undefined
  }
};

console.log(demoState);
