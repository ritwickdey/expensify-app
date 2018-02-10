import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

const getDefaultState = () => ({ count: 0 });

const incrementCount = (payload = {}) => ({
  type: 'INCREMENT',
  incrementBy: typeof payload.incrementBy == 'number' ? payload.incrementBy : 1
});

const decrementCount = (payload = {}) => ({
  type: 'DECREMENT',
  decrementBy: typeof payload.decrementBy == 'number' ? payload.decrementBy : 1
});

const resetCount = () => ({ type: 'RESET' });

const setCount = ({ count = 0 }) => ({
  type: 'SET',
  count
});

const appReducer = (state = getDefaultState(), action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrementBy };
    case 'DECREMENT':
      return { count: state.count - action.decrementBy };
    case 'RESET':
      return getDefaultState();
    case 'SET':
      return { count: action.count };
    default:
      return state;
  }
};

const store = createStore(appReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementCount({ incrementBy: 10 }));
store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 50 }));
store.dispatch(decrementCount());

store.dispatch(resetCount());
store.dispatch(setCount({ count: 101 }));

ReactDOM.render(<div>Hello</div>, document.getElementById('app'));
