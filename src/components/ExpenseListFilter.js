import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilter = props => (
  <div>
    <input
      value={props.filters.text}
      onChange={e => props.dispatch(setTextFilter(e.target.value))}
      type="text"
    />
    <select
      value={props.filters.sortBy}
      onChange={e =>
        props.dispatch(
          e.target.value === 'amount' ? sortByAmount() : sortByDate()
        )
      }
    >
      <option value="amount">Amount</option>
      <option value="date">Date</option>
    </select>
  </div>
);

const mapStateProp = state => ({
  filters: state.filters
});

export default connect(mapStateProp)(ExpenseListFilter);
