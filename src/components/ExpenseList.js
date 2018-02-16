import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import { getFilteredExpense } from '../selectors/expenses';

export const ExpenseList = props => (
  <div className="container">
    <div className="list-header">
      <div className="show-for-small-screen">Expenses</div>
      <div className="show-for-large-screen">Expenses</div>
      <div className="show-for-large-screen">Amount</div>
    </div>
    {!props.expenses || props.expenses.length === 0 ? (
      <p>No Expense</p>
    ) : (
      props.expenses.map(e => <ExpenseListItem key={e.id} {...e} />)
    )}
  </div>
);

const mapStateToProps = state => ({
  expenses: getFilteredExpense(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
