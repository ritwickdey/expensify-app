import React from 'react';
import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <div>Description : {description}</div>
    <div>Amount : {amount}</div>
    <div>createdAt : {createdAt}</div>
    <button onClick={e => dispatch(removeExpense({ id }))}>Delete</button>
    <br />
  </div>
);

export default connect()(ExpenseListItem);
