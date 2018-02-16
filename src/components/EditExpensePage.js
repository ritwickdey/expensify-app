import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export const EditExpensePage = props => (
  <div>
    <div className="page-summary">
      <div className="container">
        <h2>Edit Expense</h2>
      </div>
    </div>
    <ExpenseForm
      submitBtnName="Update Expense"
      expense={props.expense}
      onSubmit={expense => {
        props.startEditExpense(props.expense.id, expense);
        props.history.push('/');
      }}
    />
    <div className="container">
      <button
        className="btn btn__danger"
        onClick={() => {
          props.startRemoveExpense({ id: props.expense.id });
          props.history.push('/');
        }}
      >
        Delete Expense
      </button>
    </div>
  </div>
);

const mapStateToProps = (state, props) => {
  const expenseId = props.match.params.id;
  const expense = state.expenses.find(e => e.id === expenseId);
  return { expense };
};

const mapDispatchToProps = dispatch => {
  return {
    startEditExpense: (id, expense) => {
      dispatch(startEditExpense(id, expense));
    },
    startRemoveExpense: ({ id }) => {
      dispatch(startRemoveExpense({ id }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
