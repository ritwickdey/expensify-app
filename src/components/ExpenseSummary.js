import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFilteredExpense } from '../selectors/expenses';
import { getExpensesTotal } from '../selectors/expenses-total';

export const ExpenseSummary = props => (
  <div className="page-summary">
    <div className="container">
      <div className="page-summary__details">
        <div>
          Viewing <span> {props.expensesFilterCount} </span> of{' '}
          <span> {props.expensesCount} </span>{' '}
          {props.expensesCount > 1 ? 'expenses' : 'expense'}.
        </div>
        <div>
          Total : <span> ₹{props.expensesFilterTotal}</span>
        </div>
      </div>
      <div className="page-summary__actions">
        <Link to="/create" className="btn">
          Add Expense
        </Link>
      </div>
    </div>
  </div>
);

const mapStateProp = state => {
  const filteredExpenses =
    getFilteredExpense(state.expenses, state.filters) || [];

  const filteredExpensesTotal = getExpensesTotal(filteredExpenses);

  return {
    expensesCount: state.expenses.length,
    expensesFilterCount: filteredExpenses.length,
    expensesFilterTotal: filteredExpensesTotal
  };
};

export default connect(mapStateProp)(ExpenseSummary);
