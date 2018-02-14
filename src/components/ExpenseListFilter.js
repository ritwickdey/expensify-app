import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../actions/filters';

export class ExpenseListFilter extends React.Component {
  state = {
    calenderfocused: null
  };
  onCalenderFocusChange = calenderfocused => {
    this.setState(() => ({ calenderfocused }));
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onTextChange = e => this.props.setTextFilter(e.target.value);

  onSortChange = e =>
    e.target.value === 'amount'
      ? this.props.sortByAmount()
      : this.props.sortByDate();

  render() {
    return (
      <div>
        <input
          value={this.props.filters.text}
          onChange={this.onTextChange}
          type="text"
        />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="filterStartDateId"
          endDate={this.props.filters.endDate}
          endDateId="filterEndDateId"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderfocused}
          onFocusChange={this.onCalenderFocusChange}
          numberOfMonths={1}
          showClearDates={true}
          isOutsideRange={() => false}
          displayFormat="DD/MM/YY"
        />
      </div>
    );
  }
}

const mapStateProp = state => ({
  filters: state.filters
});

const mapDispathProp = dispatch => ({
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate())
});

export default connect(mapStateProp, mapDispathProp)(ExpenseListFilter);
