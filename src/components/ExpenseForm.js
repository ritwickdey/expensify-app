import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
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
    if (!amount.match(/^\d*(\.\d{0,2}){0,1}$/)) return;
    this.setState(() => ({ amount }));
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
