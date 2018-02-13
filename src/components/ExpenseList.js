import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import { getFilteredExpense } from '../selectors/expenses';

export const ExpenseList = props => (
  <div>
    <h1>Expense list</h1>
    {(!props.expenses || props.expenses.length === 0 )? (
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
