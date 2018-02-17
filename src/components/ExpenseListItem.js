import React from 'react';
import { Link } from 'react-router-dom';

import { removeExpense } from '../actions/expenses';
import moment from 'moment';

export const ExpenseListItem = ({
  id,
  description,
  amount,
  createdAt,
  dispatch
}) => (
  <Link className="list-item" to={'/edit/' + id}>
    <div>
      <h3 className="list-item__title" >{description}</h3>
      <p className="list-item__sub-title">{moment(createdAt).format('Do MMM,YYYY')}</p>
    </div>
    <div  className="list-item__amount">₹{amount}</div>
  </Link>
);

export default ExpenseListItem;
