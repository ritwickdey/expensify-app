import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

const getDefaultState = () => ({ count: 0 });
const incrementCount = (payload = {}) => ({
  type: 'INCREMENT',
  incrementBy: typeof payload.incrementBy == 'number' ? payload.incrementBy : 1
});

const store = createStore((state = getDefaultState(), action) => {
  
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        count: state.count + (action.incrementBy || 1)
      });
    case 'DECREMENT':
      return Object.assign({}, state, {
        count: state.count - (action.decrementBy || 1)
      });
    case 'RESET':
      return getDefaultState();
    case 'SET':
      return { count: action.count || state.count || 0 };
    default:
      return state;
  }

});

store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementCount({ incrementBy: 10 }));

store.dispatch(incrementCount());

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 50
});


store.dispatch(incrementCount());
store.dispatch(incrementCount());

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'SET',
  count: 101
});

ReactDOM.render(<div>Hello</div>, document.getElementById('app'));
