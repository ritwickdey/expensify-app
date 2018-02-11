import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

export const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);
