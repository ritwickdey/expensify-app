import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

export const AddExpensePage = props => (
  <div>
    <h2>Add Expense</h2>
    <ExpenseForm
      onSubmit={expense => {
        props.startAddExpense(expense);
        props.history.push('/');
      }}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
