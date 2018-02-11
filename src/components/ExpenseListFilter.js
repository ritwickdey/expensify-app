import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter } from '../actions/filters';

const ExpenseListFilter = props => (
  <div>
    <input
      value={props.filters.text}
      onChange={e => props.dispatch(setTextFilter(e.target.value))}
      type="text"
    />
  </div>
);

const mapStateProp = state => ({
  filters: state.filters
});

export default connect(mapStateProp)(ExpenseListFilter);
