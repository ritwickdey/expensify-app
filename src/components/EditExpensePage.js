import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';

const EditExpensePage = props => (
  <div>
    <h2>Edit Expense</h2>
    <ExpenseForm
      submitBtnName="Update Expense"
      expense={props.expense}
      onSubmit={expense => {
        props.dispatch(editExpense(props.match.params.id, expense));
        props.history.push('/');
      }}
    />
  </div>
);

const mapStateToProps = (state, props) => {
  const expenseId = props.match.params.id;
  const expense = state.expenses.find(e => e.id === expenseId);
  return { expense };
};

export default connect(mapStateToProps)(EditExpensePage);
