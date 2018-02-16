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
  <Link class="list-item" to={'/edit/' + id}>
    <div>
      <h3 class="list-item__title" >{description}</h3>
      <p class="list-item__sub-title">{moment(createdAt).format('Do MMM,YYYY')}</p>
    </div>
    <div  class="list-item__amount">₹{amount}</div>
  </Link>
);

export default ExpenseListItem;
