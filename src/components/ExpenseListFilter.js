import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

import 'react-dates/lib/css/_datepicker.css';

import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../actions/filters';

class ExpenseListFilter extends React.Component {
  state = {
    calenderfocused: null
  };
  onCalenderFocusChange = calenderfocused => {
    this.setState(() => ({ calenderfocused }));
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

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

export default connect(mapStateProp)(ExpenseListFilter);
