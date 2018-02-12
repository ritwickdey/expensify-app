import React from 'react';
import moment from 'moment';

import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
  }
  defaultState = () => ({
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calenderfocused: false,
    error: undefined
  });

  state = {
    ...this.defaultState(),
    description: this.props.expense ? this.props.expense.description : '',
    note: this.props.expense ? this.props.expense.note : '',
    amount: this.props.expense ? this.props.expense.amount : '',
    createdAt: this.props.expense
      ? moment(this.props.expense.createdAt)
      : moment()
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
    if (!createdAt) return;
    this.setState(() => ({ createdAt }));
  };

  onCalenderFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderfocused: focused }));
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const description = this.state.description.trim();
    if (!description || !this.state.amount) {
      this.setState(() => ({
        error: 'Description & Amount fields are required'
      }));
      return;
    }
    this.props.onSubmit({
      amount: +this.state.amount,
      createdAt: this.state.createdAt.valueOf(),
      note: this.state.note,
      description: description
    });
    this.setState(() => ({
      ...this.defaultState()
    }));
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmitHandler}>
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
            displayFormat="DD/MM/YY"
          />
          <textarea
            value={this.state.note}
            onChange={this.onNoteChange}
            placeholder="Add a note for expense (optional)"
          />
          <button>{this.props.submitBtnName || 'Add Expense'}</button>
        </form>
      </div>
    );
  }
}
