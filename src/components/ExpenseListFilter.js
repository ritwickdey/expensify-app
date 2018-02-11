import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

class ExpenseListFilter extends React.Component {
  render() {
    return (
      <div>
        <input
          value={this.props.filters.text}
          onChange={e => this.props.dispatch(setTextFilter(e.target.value))}
          type="text"
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e =>
            this.props.dispatch(
              e.target.value === 'amount' ? sortByAmount() : sortByDate()
            )
          }
        >
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
      </div>
    );
  }
}

const mapStateProp = state => ({
  filters: state.filters
});

export default connect(mapStateProp)(ExpenseListFilter);
