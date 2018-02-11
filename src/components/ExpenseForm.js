import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('Do MMM,YY'));

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calenderfocused: false
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value.trim();
    if (amount && !amount.match(/^\d{1,}(\.\d{0,2}){0,1}$/)) return;
    this.setState(() => ({ amount }));
  };

  onDateChange = createdAt => {
    if(!createdAt) return;
    this.setState(() => ({ createdAt }));
  };

  onCalenderFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderfocused: focused }));
  };

  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.description}
            onChange={this.onDescriptionChange}
            type="text"
            placeholder="Description"
            autoFocus
          />
          <input
            value={this.state.amount}
            onChange={this.onAmountChange}
            type="text"
            placeholder="Amount"
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderfocused}
            onFocusChange={this.onCalenderFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat="Do MMM,YY"
          />
          <textarea
            value={this.state.note}
            onChange={this.onNoteChange}
            placeholder="Add a note for expense (optional)"
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
