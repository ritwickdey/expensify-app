import React from 'react';

export const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <div>Description : {description}</div>
    <div>Amount : {amount}</div>
    <div>createdAt : {createdAt}</div>
    <br />
  </div>
);
