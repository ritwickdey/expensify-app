import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';

export const EditExpensePage = props => (
  <div>
    <h2>Edit Expense</h2>
    <ExpenseForm
      submitBtnName="Update Expense"
      expense={props.expense}
      onSubmit={expense => {
        props.editExpense(props.match.params.id, expense);
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

const mapDispatchToProps = dispatch => {
  return {
    editExpense: (id, expense) => {
      dispatch(editExpense(id, expense));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
